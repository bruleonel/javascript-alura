//Usando um construtor:
function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
}

//const novoUser = new User("Bruna", "psbru@gmail.com");
//console.log(novoUser.exibirInfos());

//Herança:
function Admin(role) {
    User.call(this, "Julia", "julia@gmail.com");
    this.role = role || "estudante";
}

Admin.prototype = Object.create(User.prototype); // admin herda de User
const novoUser = new Admin("admin"); //Admin é instanciado

console.log(novoUser.exibirInfos());
console.log(novoUser.role);
