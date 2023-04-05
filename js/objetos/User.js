export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    //Aqui vamos usar a função get para que as classes filhas tenham acesso à leitura
    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error("Formato não é válido");
        }
        this.#nome = novoNome;
    }


    /*Aqui é um exemplo de como criar um método privado e depois de como usá-lo, porém aqui não é necessário:
    #montaObjetoUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        }
    })*/

    //Dentro da classe não é necessário o uso da palavra function
    exibirInfos() {
        //const objUser = this.#montaObjetoUser(); Foi usado junto com o exemplo acima / Abaixo ficaria ${objUser.email}
        return `${this.#nome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo},`
    }
}

/*const novoUser = new User("Juliana", "psbru@gmail.com", "30/01/1992")
console.log(novoUser);
console.log(novoUser.exibirInfos());*/

