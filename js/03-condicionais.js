/* estrutura de controle condicional comandos que parmitem analisar uma ou mais condiçoes,comandos e a partir de resultado desta analise (verdadeiro ou falso), o programa pode sxecutar açoes diferentes.

comandos mais comuns: if,else,else if*/

let usuario = prompt("ola qual e seu nome");
let idade = prompt("quantos anos vc tem");
let mensagem;

// verificar a idade e derteminar se e maior ou menor de idade

if (idade >= 60) {
    mensagem = "idoso";
}else if (idade >= 18) {
    mensagem = "adulto";
} else {
    mensagem = "menor";
}

console.log(mensagem);