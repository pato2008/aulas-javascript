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
const linksReferencia = document.querySelectorAll("ul li a");
console.log(linksReferencia);

let quantidadelinks = linksReferencia.length

for (let links of linksReferencia) {
    links.setAttribute("traget", "_blank");
}





// for( let i = 0; i < quantidadelinks; i++ ){
//     linksReferencia[i].setAttribute("traget",'_blank')
// }


//manipulando  eventos

const pagina = document.querySelector("body");
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");

exemplo01.addEventListener("click", function () {

    pagina.style.fontFamily = "verdana";
    mensagem.textContent = "fonte alterada";
    mensagem.style.backgrondColor = "yellow";

});