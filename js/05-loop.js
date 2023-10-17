/*comandos de repetiçao instruçoes para realizar açoes por uma quantidade de vezes

comandos tradicionasi:
-while     ->enquanto
-do/while  ->faça/enquanto
-for       -> para

obs:normalmnete o jogo e comtrolado atraveis de uma varivel contadora.
*/

//exmplo (while)
// let contador = 1;
// while(contador <= 5){
//     console.log(`valor de contador : ${contador}`);
// contador++;// ++ incremento
// }

// exmplo do/while

// let i =10;
// do{
//     console.log(`contador vale: ${i}`);
//     i++
// }
// while(i <= 3)




// exemplo for

// for(let i = 1; i<= 10; i++){
// console.log( `i vale ${i}`);
// }

/*loop com array */
// let clientes=["zorro","dio","gutz","casca","luffy"];

// for(let i = 0; i <= 4; i++
// )


let bandas = ["zorro", "dio", "gutz", "casca", "luffy"];

for (let banda of bandas) {
    console.log(banda);
}



let livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http://maujor.com",
    ano: 2016,
    editoria: "novatec",
    edicao: 3,
};

//
for (let dados in livro) {

    //acessar apemas a propriedade
    //consle.log(dados);
    //acssar valaor de cada propriedade
    // console.log(livro[dados]);


    console.log(`${propriedade}  -> ${livro[propriedade]}`);
}


