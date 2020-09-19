const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual sua idade?");
console.log(typeof nome, typeof idade, nome, idade);

/*

Esse tipo foi impresso porque eu não defini valor nem o tipo das variaveis.

*/

// O tipo das variáveis passaram a ser string

console.log("Olá", nome, "você tem", idade, "anos.");

const endereco = prompt("Qual seu endereço?");
const altura = prompt("Qual sua altura?");
const peso = prompt("Qual seu peso?");
const cidade = prompt("Qual sua cidade?");
const pais = prompt("Que país você mora?");

console.log("1. Meu endereço é", endereco);
console.log("2. Minha altura é", altura);
console.log("3. Meu peso é", peso);
console.log("4. Minha cidade é", cidade);
console.log("5. Meu país é", pais);

console.log("Essas são as minhas comidas preferidas");

const comidas = ["pao", "biscoito", "tapioca", "frango", "cajá"];

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

const comida = prompt("Qual sua comida preferida?");

comidas[1] = comida;

console.log(comidas);

const perguntas = [
  "Você está usando uma calça azul hoje?",
  "Você está usando uma blusa azul hoje?",
  "Você está usando uma dres azul hoje?",
];

const calca = prompt(perguntas[0]);
const blusa = prompt(perguntas[1]);
const dress = prompt(perguntas[2]);

console.log(perguntas[0], calca == "sim");
console.log(perguntas[1], blusa == "sim");
console.log(perguntas[2], dress == "sim");
