const user = {
    nome: 'Mariana',
    email: 'm@m.com',
    nascimento: "21/02/1994",
    role: "estudante",
    ativo: true,
    exibirInfo: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: 'bruna',
    email: 'm@m.com',
    nascimento: "21/02/1994",
    role: "adm",
    ativo: true,
    criarCurso() {
        console.log("curso criado!");
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfo();


const a = {
    init: function (nome, email) {
        this.nome = nome;
        this.email = email;
    },

    exibirInfos: function () {
        return this.nome
    }
}
const novoA = Object.create(a);
console.log(novoA.exibirDados("Bruna", "psbru@gmil.comA"));
console.log(a.isPrototypeOf(novoA));