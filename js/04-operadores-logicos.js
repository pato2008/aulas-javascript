"use strict";


// Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno fictício
let aluno = "Jean";
let mediaFinal = 8.5;
let faltas = 8;
let resultado;
/*operdor logico e (and) */
// if (mediaFinal >= mediaMinima && faltas < limiteDeFaltas) {
//     resultado = "aprovado";
// } else{
//     resultado = "reprovado";
// }

// if (mediaFinal >= mediaMinima && faltas < limiteDeFaltas) {
//      resultado = "aprovado";}

// else if ( faltas > limiteDeFaltas){
// resultado= "reprovado pro faltas";
// }

// else{
// resultado="reprovado";

// }


if (faltas > limiteDeFaltas) {
    resultado = "reprovado pro faltas";
} else if (mediaFinal >= mediaFinal) {
    resultado = "aprovado";
}
else {
    resultado = "reprovado";
}

console.log(` o aluno ${aluno} esta ${resultado}`);
console.log(` media do aluno${mediaFinal}`);
console.log(`faltas do alumo ${faltas}`);

console.log("................................");

/* operador logico (or-ou) */

let diadasemana = "domingo";
if (diadasemana == "sabado" || diadasemana == "domingo") {
    console.log("final de semana :)");
}

else {
    console.log("vai estudar...");
}

console.log("................................");

// operador logico !(not/negaçao)

let blackfriday = true;

if (!blackfriday) {
    console.log("preços normais..");
}
else {
    console.log("preços com desconto");
}