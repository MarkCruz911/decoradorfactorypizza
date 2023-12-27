import { useState } from 'react'
import './App.css'
import Pizza from './Pizza';
import PizzaChampiñon from './PizzaChampiñon';
import Pizza4Quesos from './Pizza4Quesos';
import BordeQuesoDecorador from './BordeQuesoDecorador';
import ChocloDecorador from './ChocloDecorador';
import TocinoDecorador from './TocinoDecorador';

function App() {
  const [pizzas, setPizza] = useState("Italiana");
  const [tipopizza, setTipopizza] = useState("Italiana");
  const [costo, setCosto] = useState(0);
  let caf: Pizza = new Pizza();
  let [decorado, setDecorado] = useState<any>(caf);

  const prepararPizza = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPizza(e.target.value);
    console.log(e.target.value);
  }

  const tipoPizza = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipopizza(e.target.value);
    console.log(e.target.value);
  }

  const nuevoPedido = () => {
    window.location.reload();
    let pizza: Pizza4Quesos = new Pizza4Quesos();
    setDecorado(pizza);
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let pizza: Pizza = new Pizza();

    if (tipopizza === "Italiana") {
      pizza = new Pizza4Quesos();
      console.log("antes de hacer setDecorador", pizza);
      setDecorado(pizza);
      setTipopizza("otro");
      console.log(pizza.preparar);
    }

    if (tipopizza === "Vegana") {
      pizza = new PizzaChampiñon();
      console.log("antes de hacer setDecorador", pizza);
      setDecorado(pizza);
      setTipopizza("otro");
      console.log(pizza.preparar);
    }

    if (pizzas === "Borde") {
      pizza = new BordeQuesoDecorador(decorado);
      setDecorado(pizza);
    } else if (pizzas === "choclito") {
      pizza = new ChocloDecorador(decorado);
      setDecorado(pizza);
    } else if (pizzas === "Tocino") {
      pizza = new TocinoDecorador(decorado);
      setDecorado(pizza);
    }

    setCosto(pizza.costo());
    console.log(pizza.preparar());
    return pizza.preparar();
  };

  return (
    <>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-2">Pizza Express</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 rounded-lg shadow-md bg-white p-4 m-4">
          <div className="col-span-2 font-semibold">Tomo su orden</div>
          <div className="col-start-3 font-semibold">Precio</div>
          <div className="col-span-2 row-start-2">{decorado?.preparar()}</div>
          <div className="col-start-3 row-start-2">${costo}</div>
        </div>

        <div className="mb-4 flex justify-center">
          {pizzas === "normal" && (
            <img src="http://imgfz.com/i/LuoglJp.png" alt="" className="w-72 h-60 rounded-md" />
          )}
          {pizzas === "Borde" && (
            <img src="http://imgfz.com/i/9KMVOCI.png" alt="" className="w-72 h-60 rounded-md" />
          )}
          {pizzas === "choclito" && (
            <img src="http://imgfz.com/i/QnIiPR7.png" alt="" className="w-72 h-60 rounded-md" />
          )}
          {pizzas === "Tocino" && (
            <img src="http://imgfz.com/i/6DrUCi3.png" alt="" className="w-72 h-60 rounded-md" />
          )}
          {pizzas === "Vegana" && (
            <img src="http://imgfz.com/i/uo0khSZ.png" alt="" className="w-72 h-60 rounded-md" />
          )}
          {pizzas === "Italiana" && (
            <img src="http://imgfz.com/i/pw3gxD4.png" alt="" className="w-72 h-60 rounded-md" />
          )}
        </div>

        <form action="" onSubmit={handleSubmit} className="mb-4">
          <div className="mb-2">
            <p className="mb-2">Agrégale estilo a tu pizza con decoradores en Pizza Express!</p>
            <div className="flex mb-2">
              <select onChange={prepararPizza} className="p-2 border border-gray-300 rounded-md mr-2">
                <option value="normal"></option>
                <option value="Borde">Borde con Queso</option>
                <option value="choclito">Choclito</option>
                <option value="Tocino">Tocino</option>
              </select>
              <select onChange={tipoPizza} className="p-2 border border-gray-300 rounded-md mr-2">
                <option value="Italiana">Pizza 4 Quesos</option>
                <option value="Vegana">Pizza con Champiñon</option>
              </select>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">DECORAR</button>
            </div>
          </div>
        </form>
        <button onClick={nuevoPedido} className="bg-green-500 text-white px-4 py-2 rounded-md">Nuevo Pedido!</button>
      </div>
    </>
  )
}

export default App
