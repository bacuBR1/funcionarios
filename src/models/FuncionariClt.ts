import Pessoa from "./Pessoa.js";

export default class FuncionarioClt extends Pessoa {
    private salario:number;
    private bonus:number;
    private salarioComBonus:number;

    constructor (salario:number, bonus:number,salarioComBonus:number, nome:string, cpf:string, id:number) {
        super(nome,cpf, id);
        this.salario = salario;
        this.bonus = bonus;
        this.salarioComBonus = salarioComBonus;
    }

    getSalario ():number {
        return this.salario;
    }

    getBonus ():number {
        return this.bonus;
    }

    setSalario (salario:number):void {
        if (salario >= 0) {
            this.salario = salario;
        } else {
            console.log("o salario base não pode ser negativo")
        }
    }

    setBonus (bonus:number):void {
        this.bonus = bonus
    }

    getSalarioTotal():number {
        var bonus_mes = this.bonus / 12;
        this.salarioComBonus = this.salario + bonus_mes;

        return this.salarioComBonus;
    }
}