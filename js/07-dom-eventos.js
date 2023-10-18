"use strict";

/* funçoes de seleçao no DOM


getelementbtId()

queyselector()

queryselectorALL()
*/
const subtitulo = document.getElementById("subtitulo-dom");
const desenho = document.querySelector("figure");
const descricao = document.querySelector("#descricao");

console.log(desenho);
console.log(descricao);

const varioselementos = document.querySelectorAll("h3,a");
console.log(varioselementos);
console.log(varioselementos[1]);

//modificandoo dom

const titulo = document.querySelector("h1");
titulo.textContent = "helo word";
titulo.style.textAlign = "center";//css inline via css
titulo.classList.add("destaque");//classe css vai js]

//seliciomando os links contidos na lista 
const linksReferencia=document.querySelectorAll("ul li a");
console.log(linksReferencia);

for(let i = 0 < quantidadelinks; i++ ;){
    linksReferencia[i].set
}
