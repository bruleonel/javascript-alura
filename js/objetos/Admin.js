import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "Administrador", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
    criarCurso(NomeDoCurso, vagas) {
        return `Curso de ${NomeDoCurso} criado com ${vagas} vagas.`
    }
}
