import PizzeriaFabricaAbstracta from "./PizzeriaFabricaAbstracta";


class PizzeriaVegana extends PizzeriaFabricaAbstracta{
    fabricar(): string {
        return `${super.fabricar()} PizzeriaVegana`;
    }
}

export default PizzeriaVegana;