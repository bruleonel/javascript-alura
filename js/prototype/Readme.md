# Métodos

## apply()
O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array:

function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
}

    const user = {
        nome: 'Mariana',
        email: 'm@m.com',
        executaFuncao: function(fn) {
        fn.apply(user, [this.nome, this.email])
    }
}
 user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

 ## Bind();

const user = {
    nome: 'Mariana',
    email: 'm@m.com',
    nascimento: "21/02/1994",
    role: "adm",
    ativo: true,
    exibirInfo: function() {
        console.log(this.nome, this.email);
    }
}

user.exibirInfo();

const exibir = function () {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user);
exibirNome();
exibir();

### Call()

O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this. Ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.

Um exemplo de uso de call() para especificar o contexto de this:

![call-gif](https://user-images.githubusercontent.com/104650333/229905651-85cedbf8-9080-4f21-b44d-5c84f6ea4b9f.gif)

Mesmo após ser instanciada:

![call2-gif](https://user-images.githubusercontent.com/104650333/229908634-0f7d8bcc-df3d-4ea2-a00d-179041253fb0.gif)

Também é possível passar parâmetros para call(), como no exemplo a seguir:

![call3-gif](https://user-images.githubusercontent.com/104650333/229910747-f525f646-4da1-45e3-8a46-6383eb9831b5.gif)
