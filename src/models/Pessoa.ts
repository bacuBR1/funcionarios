export default abstract class Pessoa {
    private nome:string;
    private cpf:string;
    private id:number

    constructor(nome:string,cpf:string, id:number) {
        this.nome = nome,
        this.cpf = cpf,
        this.id = id
    }

    getNome ():string {
        return this.nome
    }

    getCpf ():string {
        return this.cpf
    }

    getId ():number {
        return this.id
    }
     
    setNome (nome:string):void{
        if ( nome.length <=  3 ){
            this.nome = nome
        } else {
            alert("não foi possicel cadastrar o nome")
        }
    }

    setCpf (cpf:string):void{
        var somaCpf:number = 0;
        for (const char of cpf) {
            somaCpf += parseInt(char)
        }
        if (cpf.length == 11 && somaCpf%11 == 0) {
            this.cpf = cpf
        }
    }

    setId():void {
        var idATI:number = 0;
        idATI++;

        this.id = idATI;
    }
}