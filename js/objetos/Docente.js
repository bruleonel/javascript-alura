import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "Administrador", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso de: ${curso}.`
    }
}

