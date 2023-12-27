import DecoradorPizza from "./DecoradorPizza";

  // Decorador concreto:  Decorador
  class   TocinoDecorador extends DecoradorPizza {
    preparar(): string {
      return `${super.preparar()} +  Tocino `;
    }
    costo(): number {
        return super.costo()+15;
    }
  }


export default  TocinoDecorador;