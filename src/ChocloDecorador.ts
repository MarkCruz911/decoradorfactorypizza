import DecoradorPizza from "./DecoradorPizza";

  // Decorador concreto: ChocloDecorador
  class ChocloDecorador extends DecoradorPizza {
    preparar(): string {
      return `${super.preparar()} + Choclo`;
    }
    costo(): number {
        return super.costo()+10;
    }
  }


  export default ChocloDecorador;
  