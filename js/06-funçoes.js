"use strict"

/* funçoes 


funções sao bolco de codico q pode ser executado em praticamennte em qualquer local

alem de ser benefeco na organizaçao de codigo
 
o js ja possui centenas de fumçoes prontas
ex:
log(), alert(),prompt(),etc
*/

/* como escrever funçoes de js */

// forma !:funçao anonimas

const exemplo1 = function () {
    console.log("funçao anonima");
};


//forma 2 :função nomeada/declarada
function exemplo2() {
    console.log("função nomeada")
};

//forma 3 : arrow funtion

const exemplo3 = () => {
    console.log("arrow funtion");
};

// chamada de fundação para execução

exemplo1();
exemplo2();
exemplo3();

function somar(valor1, valor2) {
    return valor1 + valor2;
}


console.log(somar(10, 20));
console.log(somar(15, 50));
console.log(somar(30, 47.8));


let preco = 5500;
let desconto = preco * 0.10;
let precoFinal = preco - desconto;

function formatarpreco(valor){ 
   let opcoes = {
        style:"currency",
        currency:"BRL"
    }
return valor.toLocaleString("pt-br",opcoes)};



console.log(`preco ${formatarpreco(preco)}`);
   console.log(`desconto ${formatarpreco(desconto)}`)
   console.log(`precofinal ${formatarpreco(precoFinal)}`)

   
// console.log(`preco: ${preco.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL"
// })}`
// );




// console.log(`desconto: ${desconto.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL"
// })}`
// );

// console.log(`precofinal: ${precoFinal.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL"
// })}`
// );
