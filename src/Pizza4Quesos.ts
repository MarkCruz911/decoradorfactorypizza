import Pizza from "./Pizza";


class Pizza4Quesos extends Pizza{
    preparar(): string {
        return `${super.preparar()} Pizza 4 Quesos`;
    }
    costo(): number {
        return super.costo()+45;
    }
}


export default Pizza4Quesos;