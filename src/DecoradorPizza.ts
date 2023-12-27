import Pizza from "./Pizza";

  // Decorador base: DecoradorPizza
  class DecoradorPizza extends Pizza {
    //agregacion
    protected pizza: Pizza;
  
    constructor(pizza: Pizza) {
      super();
      this.pizza = pizza;
    }
  
    preparar(): string {
      return this.pizza.preparar();
    }
    costo():number{
        return this.pizza.costo();
    }
  }


export default DecoradorPizza;