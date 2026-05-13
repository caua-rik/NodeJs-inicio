// ==== Exercício 1: Par ou ímpar ====
/*
let numero = 1;
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
*/

// ==== Exercício 2: Calculadora de média ====
/*
const nota1 = 4;
const nota2 = 7;
const nota3 = 2;

function calcularMedia(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
}

if (calcularMedia >= 7){
    console.log("A média é: " + calcularMedia(nota1, nota2, nota3) + " - Aluno aprovado.");
} else {
    console.log("A média é: " + calcularMedia(nota1, nota2, nota3) + " - Aluno reprovado.");
}
*/

// ==== Exercício 3: Contagem Regressiva ====
/*
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("Lançamento do Foguete Iniciado!");
*/

// ==== Exercício 4: Listagem de Tarefas ====
/*
let tarefasDia = ["Estudar Node", "Fazer Exercícios", "Ler documentação"];
tarefasDia.push("Trabalhar no projeto");

for (i = 0; i < tarefasDia.length; i++){
    console.log("Tarefa: " + tarefasDia[i]); 
}
*/

// ==== Exercício 5: Função de Conversão de Temperatura ====
/*
let Celsius = 25;

function converCelsiusFhrenheit(Celsius){
    const Fahrenheit = (Celsius * 1.8) + 32;
    return Fahrenheit;
}
console.log("Valor em Fahrenheit: " + converCelsiusFhrenheit(Celsius));
*/

// ==== Exercício 6: Gerenciador de API Rest (Arrays e Objetos) ====

const cliente = [
    { id: 1, nome: "Ana", idade: 25, ativo: true },
    { id: 2, nome: "Beto", idade: 17, ativo: true },
    { id: 3, nome: "Carla", idade: 30, ativo: false },
    { id: 4, nome: "Daniel", idade: 16, ativo: true },
];

function buscarClientesAtivos(){
    return cliente.filter(cliente => cliente.ativo === true);
}

function buscarMaioresDeIdade(){
    return cliente.filter(cliente => cliente.idade >= 18);
}

const ativos = buscarClientesAtivos().map(cliente => {
    return `${cliente.nome} - ${cliente.ativo};`
})

const maiorIdade = buscarClientesAtivos().map(cliente => {
    return `${cliente.nome} - ${cliente.idade};`
})

console.log(ativos);
console.log(maiorIdade);