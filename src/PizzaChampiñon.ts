import Pizza from "./Pizza";


class PizzaChampiñon extends Pizza{
    preparar(): string {
        return `${super.preparar()} Pizza con Champiñon`;
    }
    costo(): number {
        return super.costo()+35;
    }
}


export default PizzaChampiñon;