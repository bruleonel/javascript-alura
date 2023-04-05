import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

//user:
const novoUser = new User("Juliana", "psbru@gmail.com", "30/01/1992")
console.log(novoUser.exibirInfos());
console.log(" ");

//Docente:
const novoDocente = new Docente("Camila", "camila@gmail.com", "24/09/1996")
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("Rodrigo", "Angular"));
console.log(" ");


//Administrador:
const novoAdmin = new Admin("Fernanda", "nanda@gmail.com", "24/05/1999")
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso("Angular", 35));
console.log(" ");
console.log(novoAdmin.nome);
novoAdmin.nome = "Bruna";
console.log(novoAdmin.nome);