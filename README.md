# javaScript
Aqui vou registrar métodos e informações importantes do JS para futuras consultas. Será como uma documentação de meus estudos diários.

## Para executar o projeto
- Entre no arquivo e digite Cntrl + Alt + N

# Classes, Funções Construtoras, Prototype e Factory Function

### Antes da versão E6 do Js não existiam as classes, somente um objeto literal:

const Livro = {
    nome: "Mentes Perigosas",
    editora: "Principium",
    páginas: "288"
    descrever: function() {
        console.log("Eles podem ter várias faces. Disfarçados de pessoas de bem, autora de mentes ansiosas ocultam o que realmente são: seres calculistas, manipuladores e insensíveis aos sentimentos alheios. Estão ao nosso lado no trabalho, na escola, na vizinhança e no círculo familiar e, a qualquer momento, podem gerar destruição em nossa vida. Eles são os psicopatas, uma ameaça real e silenciosa para toda a sociedade.");
    }
}

### Para chamar a descrição:

Livro.anunciar();

### E para criar outro livro?
Apartir dessa estrutura não tem como, pra isso usava-se funções construtoras:

const Livro =  function(nome, editora, paginas) {
    gNome = nome;
    gEditora = editora;
    gPaginas = paginas

    this.getNome = function() {
        return gNome
    }

    this.getEditora = function() {
        return gEditora
    }

    this.getPaginas = function() {
        return gPaginas
    }
}

### Depois o Livro era instanciado:
{
    const mentesPerigosas = new Livro("Mentes Perigosas","Principium","288"); 
    console.log(mentesPerigosas.getNome());
    console.log(mentesPerigosas.getEditora());
    console.log(mentesPerigosas.getPaginas());
}

### Quase tudo em JS é um objeto, o qual tem uma propriedade escondida, o prototype:
const nome = "Alura";

### Por baixo dos "panos" o JS faz isso:
Ex1:

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/104650333/230234041-e7cc41f1-03bd-49a2-9534-59583a8425e1.gif)


# Prototype

Durante nossos estudos de JavaScript é normal toparmos com os protótipos de duas formas diferentes, através da propriedade __proto__ ou do objeto prototype que vemos em todos os objetos. Afinal, qual a diferença e quando se usa cada um deles?

Para entender melhor essa diferença, vamos testar alguns códigos:
{
    let user = {
        perfil: 'estudante'
    }

    let estudante = {
        nome: 'juliana'
    }
}
{
    Object.setPrototypeOf(estudante, user)
}

No trecho acima, definimos dois objetos, com propriedades diferentes, e estabelecemos que o objeto user será usado como protótipo para o objeto estudante. Podemos testar esse código direto no terminal:
{
    console.log(estudante.nome) // 'juliana'
    console.log(estudante.perfil) //'estudante'
}
É possível acessar __proto__ de estudante, porém, para isso, devemos copiar o código acima e executá-lo no console do navegador, pois o módulo console do NodeJS funciona de uma forma um pouco diferente e não vai acessar essa propriedade.


Se adicionarmos mais uma propriedade ao objeto user, essa propriedade entrará também como protótipo do objeto estudante:

user.ativo = true


Quando usamos objetos e funções para trabalhar com orientação a objetos com JavaScript, os objetos criados não são instâncias diferentes (ou seja, cópias do objeto-base) e sim referências a um mesmo objeto que está sendo delegado aos objetos que o usam como protótipo.

Agora vamos ver outro exemplo, dessa vez utilizando new para criar um novo objeto:

function User() {}
User.prototype.perfil = 'estudante'
let estudante = new User()

### Testando no próprio terminal:
{
    console.log(estudante.perfil) //'estudante'
}
No caso acima, a palavra-chave new vai criar um novo objeto simples e definir, na propriedade prototype desse objeto recém criado, as propriedades de protótipo que encontrar em User. O prototype é criado automaticamente e existe como propriedade apenas em funções, para quando queremos usar determinada função como construtor usando new.

Vamos fazer um último teste, copiando a função User() criada acima e executando no console do navegador:

### Em resumo:

__proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido para aquele objeto.

prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos objetos.

Você também pode ter notado que alguns objetos também possuem uma propriedade chamada [[Prototype]]. Esta é uma propriedade interna que cada instância de um objeto possui, e que aponta (como um ponteiro) para a propriedade prototype da função que está sendo usada como protótipo. Quando criamos um novo objeto usando new, a propriedade prototype do construtor (como vimos acima) é “linkada” à essa propriedade [[Prototype]] da nova instância criada.

Existem diversos métodos internos do JavaScript para verificar as propriedades de um construtor e também das instâncias criadas através dele. Você pode conferir a lista na documentação do MDN.

Faça mais testes criando objetos a partir de funções construtoras e confira o resultado!

Vimos vários aspectos da herança de protótipos durante a aula, vamos resumir alguns deles aqui e colocar alguns pontos extras:

## Protótipo vs prototype
Praticamente todos os dados criados em JavaScript (objetos, arrays, etc) têm um protótipo, porém apenas alguns deles têm a propriedade prototype. São estes objetos que contêm a propriedade prototype que acessamos com Object.prototype, Array.prototype e etc durante o vídeo, que definem os protótipos para todos os outros acima na cadeia.

Ou seja, todos os objetos criados a partir de Object, Array, String, etc, têm um protótipo que foi “herdado” destes, mas não necessariamente têm uma propriedade prototype.

## Cópia vs referência
Os métodos e propriedades não são copiados de um objeto para outro na cadeia de protótipos - eles são acessados pelo interpretador ao percorrer a cadeia e os métodos executados de acordo com o this, ou seja, o contexto em que o método foi executado.

## __proto__ será descontinuado
O uso de __proto__ durante a aula é só para dar exemplo e acessar a cadeia de protótipos. Esta é uma propriedade “assessor” que serve para “expor” o protótipo dos objetos e está em processo de ser descontinuada. Você pode ler mais sobre esta propriedade na documentação do MDN.

## Não altere o prototype
Não é recomendável alterar diretamente o prototype, pois alterar diretamente as regras de herança de qualquer objeto afeta a performance do código em qualquer interpretador, seja o NodeJS ou navegadores. Vamos ver como criar objetos de acordo com as boas práticas do JavaScript em seguida.

## Cuidado com a performance
Todas as propriedades de uma cadeia de protótipos são enumeradas e o tempo que o interpretador leva para pesquisar uma propriedade, desde o nível mais alto na cadeia, pode ser longo e impactar o desempenho. Além disso, se o código tentar acessar uma propriedade não existente, vai percorrer toda a cadeia durante a busca. Assim, não é uma boa prática criar longas cadeias de protótipos.

### Após o E6 começaram o uso das classes, usando o mesmo exemplo:

class Livro {
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

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/104650333/230236112-630c9741-022c-4460-91b6-cebf91c1285d.gif)


### Para criar um livro:

const NodeJs = new Livro("Primeiros passos com NodeJs", "Casa do Código", 195);
NodeJS.anunciarTitulo();
NodeJS.descreverTitulo();

### Lembrando que classes são fuções:
console.log(typeof Livro);

### E sobre as Heranças:

class LivroColecao extends Livro {
    constructor(nome, nomeColecao) {
        super(nome)
        this.nomeColecao = nomeColecao;
    }
    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LGPD = new LivroColecao("Lei de Privacidade de Dados", "Lendo")

### Para usar a classe em outras partes do projeto é preciso exportá-la:

export default class User {
    constructor(nome, email, nascimeto, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimeto = nascimeto;
        this.role = role || "estudante";
        this.ativo = ativo;
    }

    //Dentro da classe não é necessário o uso da palavra function
    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

### depois digitar o comando:
- npm init -y

### Dentro do arquivo Json
Iserir:
"type": "module"
Ex: 

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/104650333/230236271-f6824378-581f-4bd7-ae0f-dad03f1d8a25.gif)


### Depois só importar dentro do arquivo:

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/104650333/230234925-19137a94-db6d-4e43-b379-6851c4a8532a.gif)

Quando trabalhamos com NodeJS, é comum usarmos arquivos diferentes para separar e organizar o código. Cada arquivo .js é um módulo independente e suas funções, variáveis e classes não são compartilhados com o restante do código, a não ser quando são explicitamente exportados e importados em outros módulos.

O JavaScript, em seus diversos interpretadores, faz a importação/exportação de módulos de duas formas, usando a sintaxe CommonJS ou CJS ou a sintaxe EcmaScript Modules, ou ESM. Vamos ver exemplos de ambas as formas.

CommonJS, ou CJS
Até a versão 13, a função que o NodeJS utiliza por padrão para importar módulos em um arquivo é require(). Os módulos podem importar e exportar todas as funções declaradas no arquivo ou apenas algumas, de acordo com o necessário. Este é o formato de exportação e importação de módulos conhecido como CommonJS ou CJS.

Por exemplo, para exportar apenas uma função em um arquivo:

module.exports = function soma(num1, num2) {
 return num1 + num2;
};

ou

function soma(num1, num2) {
 return num1 + num2;
}

module.exports = soma;

É possível exportar apenas a função que precisa ser executada a partir de outra parte do código, enquanto outras funções do mesmo arquivo permanecem inacessíveis ao restante. Por exemplo:

function soma(num1, num2) {
 return num1 + num2;
}

function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}

module.exports = multiplica;

No exemplo anterior, declaramos as funções soma() e multiplica(). A função multiplica() executa soma() dentro de seu escopo e retorna um resultado. Podemos exportar somente a função multiplica() para ser utilizada em outras partes do código, sem a necessidade de exportar tudo.

Por outro lado, caso seja necessário exportar e importar mais de uma função, podemos fazer isso exportando um único objeto no final do arquivo/módulo:

function soma(num1, num2) {
 return num1 + num2;
}

function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}

module.exports = { multiplica, soma };

Essas funções podem ser importadas desestruturando o mesmo objeto:

const { multiplica, soma } = require('./caminho/arquivo');

const resultadoMult = multiplica(2, 2);
const resultadoSoma = soma(2, 2);

O mesmo princípio se aplica para módulos externos que instalamos em nosso projeto a partir de um gerenciador de pacotes como o NPM (com npm install <nome da lib>); nesse caso não precisamos passar o caminho, pois o JavaScript vai acessar os métodos necessários a partir da pasta node_modules:

const chalk = require('chalk');

A mesma coisa para módulos que já são built-in no NodeJS. Ou seja, são módulos que integram o sistema, mas mesmo assim precisam ser importados para dentro do projeto, como o módulo fs (file system, ou sistema de arquivos):

const fs = require('fs');

Já vimos como o chalk funciona e veremos o fs mais para frente no curso.

EcmaScript Modules, ou ESM
Quando utilizamos o ESM, o mesmo processo de exportação de módulos é feito com a sintaxe export ou export default e a importação com a sintaxe import <nomeModulo> from ‘./caminho/arquivo.js’.

Esta outra forma de lidar com a importação e exportação de módulos veio com o famoso ES6 ou JS2015 e foi aos poucos sendo implementada para funcionar nativamente nos navegadores com a ajuda de bundlers como o WebPack, que fazem a “tradução” de métodos do JavaScript mais moderno para garantir retrocompatibilidade.

Hoje o ESM já funciona nativamente em todos os navegadores e passou a ter suporte para Node a partir da versão 13 (no momento em que escrevemos este conteúdo, o NodeJS está na versão 16.13.2). Mesmo assim, grande parte das aplicações desenvolvidas com NodeJS ainda utiliza o formato CJS de importação e exportação de módulos e as bibliotecas, pacotes e frameworks estão em processo de substituição do CJS para o ESM.

A sintaxe do ESM segue os exemplos abaixo. Para exportar funções, por exemplo:

export function soma(num1, num2) {
 return num1 + num2;
}

export function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}


Ou, alternativamente, para exportar somente a função multiplica() como default (padrão):

function soma(num1, num2) {
 return num1 + num2;
}

function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}

export default multiplica;

Ou outra forma de exportar mais de uma função:

function soma(num1, num2) {
 return num1 + num2;
}

function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}

export { multiplica, soma };

import soma from './caminho/arquivo.js';

É possível também importar de uma só vez todo o objeto exportado:

import * as operacoes from './caminho/arquivo.js';

E importar da seguinte forma:

const soma = operacoes.soma(1, 2);
const multiplica = operacoes.multiplica(1, 2);

Existe uma convenção no uso de ESM em projetos NodejS, que é utilizar a extensão .mjs para distinguir quais arquivos são módulos, continuando com a extensão .js para os arquivos que não exportam módulos.

Conclusão
O sistema CJS (CommonJS) foi desenvolvido para funcionar como o sistema de exportação/importação de módulos do NodeJS.
O ESM (EcmaScript Modules) foi desenvolvido para que o JavaScript tivesse nativamente seu próprio sistema de módulos - estamos falando do JavaScript interpretado nos navegadores.
O NodeJS implementou o suporte ao ESM a partir da versão 13.
## factory function

Uma factory function (“função fábrica”) é como chamamos, em JavaScript, uma função que retorna um objeto.

Exemplo de factory function:

function criaUser(nome, email) {
    return {
        nome,
        email,
        exibeInfos() {
        return `${nome}, ${email}`
        }
    }
}

Veja que, não se trata de um objeto literal mas sim uma função que retorna (através da palavra-chave return) um objeto.

A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades (nome e email) e um método interno (exibeInfos()):

const newUser = criaUser('Rodrigo', 'r@r.com')
console.log(newUser)
console.log(newUser.exibeInfos())

O retorno esperado no terminal:

{
    nome: 'Rodrigo',
    email: 'r@r.com',
    exibeInfos: [Function: exibeInfos]
}

Rodrigo, r@r.com

As factory functions são diferentes das funções construtoras. Veja um exemplo de função construtora, como fizemos anteriormente durante a aula:

function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibeInfos = function() {
    return `${nome}, ${email}`
    }
}

As funções construtoras devem ser chamadas com o operador new para criar instâncias do objeto User:

const newUser = new User('Mariana', 'm@m.com')
console.log(newUser)
console.log(newUser.exibeInfos())

O retorno no console é praticamente o mesmo, com exceção que agora exibeInfos() é uma função anônima e o objeto é explicitamente uma instância de User:

User {
    nome: 'Mariana',
    email: 'm@m.com',
    exibeInfos: [Function (anonymous)]
}

Mariana, m@m.com

No caso da factory function não há perda de contexto na execução dos métodos internos.

Quais as diferenças e qual devo usar?

Não há consenso, pois ambas têm vantagens e desvantagens. A sintaxe da função construtora é mais confortável para quem está acostumado com o uso de classes; já a factory function é mais flexível a respeito do tipo de objeto que será retornado.

Boa parte dos frameworks e bibliotecas do NodeJS vão trabalhar com classes ou construtores, instanciados com new.



