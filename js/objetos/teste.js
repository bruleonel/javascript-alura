/*class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas
    }

    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    }

    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const NodeJs = new Livro("Primeiros passos com NodeJs", "Casa do Código", 195);
NodeJs.anunciarTitulo();
NodeJs.descreverTitulo();

class LivroColecao extends Livro {
    constructor(nome, nomeColecao) {
        super(nome)
        this.nomeColecao = nomeColecao;
    }
    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LGPD = new LivroColecao("Lei de Privacidade de Dados", "Lendo");
LGPD.descreverColecao();
LGPD.anunciarTitulo();
*/

/*Vamos fazer mais um exercício com setters.

Podemos supor que, na classe User, seja necessário separar as propriedades de nome 
e sobrenome dos usuários, pois a base de dados guarda cada uma dessas informações 
em campos separados. Porém, em todas as comunicações que levam o nome do usuário, 
nome e sobrenome devem aparecer juntos.

Uma forma de resolver isso seria através do setter de nome.Vamos alterar um pouco 
a classe User para receber, no construtor, #nome e #sobrenome:*/

export default class User {
    #nome
    #sobrenome
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
    }
    /* A questão agora é que nome e sobrenome devem ser unidos no getter (para serem
         “mandados” para fora da classe como um único dado) e separados no setter, 
         pois o método sempre receberá um nome completo e #nome e #sobrenome são 
         propriedades diferentes que estão salvas no banco em campos separados.
    
    Começando pelo setter: 

    Atualizamos agora os getters:*/

    get nome() {
        return this.#nome
    }
     
    get sobrenome() {
        return this.#sobrenome
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }
    
    set nome(novoNome) {
        if (novoNome === '') {
          throw new Error('formato não válido')
        }
        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
    }
    /*Aqui pegamos uma string única e separamos em nome e sobrenome, para que cada 
    propriedade possa ser atualizada. Fizemos isso utilizando os métodos do JavaScript 
    split() e join para manipular strings e arrays.*/

}

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'
