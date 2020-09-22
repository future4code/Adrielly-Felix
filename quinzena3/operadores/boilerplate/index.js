//Interpretação
// 1. a. false
//    b. false
//    c. true
//    e. boolean

// 2. a. underfined
//    b. null
//    c. 11
//    d. 3
//    e. 11
//    f. 9

//Escrita de código
//1.
/*
    let idadeLuiz; 
    let idadeMaria;
    let resposta;
    let diferenca;
    idadeLuiz = Number(prompt("Qual a sua idade?"));
    idadeMaria = Number(prompt("Qual da sua melhor amiga ou amigo?"));
    resposta = idadeLuiz > idadeMaria;
    diferenca = idadeLuiz - idadeMaria;
    console.log("Sua idade é maior do que a do seu melhor amigo ou amiga?");
    console.log(resposta);
    console.log(diferenca);
*/

//2.
/*
    let numPar;
    let rest;
    numPar = Number(prompt("Insira um número par"));
    rest = numPar%2;
    console.log(rest);
    
    A diferença será sempre 0
    Se o numero for impar sera sempre 1
*/

//3.
/*
    let listaDeTarefas = [];
    let deletaDaLista;
    
    listaDeTarefas[0] = prompt("Cite uma tarefa que realize em seu dia-a-dia.");
    listaDeTarefas[1] = prompt("Cite mais uma tarefa que realize em seu dia-a-dia.");
    listaDeTarefas[2] = prompt("Cite outra uma tarefa que realize em seu dia-a-dia.");
    console.log(listaDeTarefas);
    deletaDaLista = prompt("Digite o índice de uma das tarefas que citou, onde a primeira se refe a 0, a segunda a 1 e a terceira a 2.");
    listaDeTarefas.splice(deletaDaLista, 1);
    console.log(listaDeTarefas);
*/

//4.
/* 
    let nome;
    let email; 
    nome = prompt("Qual seu nome?");
    email = prompt("Qual seu email?");
    console.log("O e-mail "+email+" foi cadastrado com sucesso. Seja bem-vinda(o), "+nome+"!");
*/
