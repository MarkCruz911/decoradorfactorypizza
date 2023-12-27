import PizzeriaFabricaAbstracta from "./PizzeriaFabricaAbstracta";


class PizzeriaItaliana extends PizzeriaFabricaAbstracta{
    fabricar(): string {
        return `${super.fabricar()} PizzeriaItaliana`;
    }
}

export default PizzeriaItaliana;