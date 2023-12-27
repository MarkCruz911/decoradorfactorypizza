import DecoradorPizza from "./DecoradorPizza";

// Decorador concreto: BordeQuesoDecorador
class BordeQuesoDecorador extends DecoradorPizza {
  preparar(): string {
    return `${super.preparar()} + Borde de Queso`;
  }
  costo(): number {
    return super.costo() + 15;
  }
}

export default BordeQuesoDecorador;