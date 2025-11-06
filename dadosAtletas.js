class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
        this.categoria = this.calculaCategoria()
        this.imc = this.calculaIMC()
        this.mediaValida = this.calculaMediaValida()
    }

    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        } else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil"
        } else if(this.idade >=14 && this.idade <= 15){
            return "Intermediário"
        } else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        } else {
            return "Sem categoria"
        }
    }

    calculaIMC(){
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida(){
                            //O operador ... (spread operator) cria uma cópia superficial do array this.notas
        let notasOrdenadas = [...this.notas].sort((a, b) => a - b)

        let notasValidas = notasOrdenadas.slice(1, -1)

        let somaNotas = notasValidas.reduce((acumulador, nota) => acumulador + nota, 0)
                              
        if(notasValidas.length === 0){
            return 0 // Evita divisão por zero
        }

        return somaNotas / notasValidas.length

        }

        obtemNomeAtleta(){
            return this.nome
        }

        obtemIdadeAtleta(){
            return this.idade
        }

        obtemPesoAtleta(){
            return this.peso
        }

        obtemNotasAtleta(){
            return this.notas
        }

        obtemCategoria(){
            return this.categoria
        }

        obtemIMC(){
            return this.imc
        }

        obtemMediaValida(){
            return this.mediaValida
        }

        exibeInformacoes(){
            console.log(`Nome: ${this.obtemNomeAtleta()}`)
            console.log(`Idade: ${this.obtemIdadeAtleta()}`)
            console.log(`Peso: ${this.obtemPesoAtleta()}`)
            console.log(`altura: ${this.altura}`)// não foi solicitado um getter específico
            console.log(`Notas: ${this.obtemNotasAtleta()}`)
            console.log(`Categoria: ${this.obtemCategoria()}`)
            console.log(`IMC: ${this.obtemIMC()}`)
            console.log(`Média Válida: ${this.obtemMediaValida()}`)
        }
}

let atleta = new Atleta(
    "Cesar Abascal",
    30, 
    80, 
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
)

console.log("--- Informações do Atleta ---")
atleta.exibeInformacoes()