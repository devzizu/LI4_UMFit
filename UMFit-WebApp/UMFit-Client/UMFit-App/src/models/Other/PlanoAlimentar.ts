
export {}

export class Refeicao {

    nome: string
    descricao: string

    constructor(nm: string,
                des: string){
        
        this.nome = nm;
        this.descricao = des;
    }
}

export class PlanoAlimentar {

    nome: string
    refeicoes_livres: string
    frequencia: string
    lista_refeicoes: Array<Refeicao>

    constructor(nm: string, 
                refliv: string,
                freq: string,
                list: Array<Refeicao>) {
        
        this.nome = nm;
        this.refeicoes_livres = refliv;
        this.frequencia = freq;
        this.lista_refeicoes = JSON.parse(JSON.stringify(list))
    }
}