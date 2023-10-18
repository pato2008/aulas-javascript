function converteMoeda(valorEmDolar) {

    const cotacaoDolar = 5.03;
    const valorEmReais = valorEmDolar * cotacaoDolar;
    console.log(`dólar: $${valorEmDolar}`);
    console.log(`real: R$${valorEmReais.toFixed(2)}`);
}

converteMoeda(100); 

function formataMoeda(valor){ 
    let opcoes = {
         style:"currency",
         currency:"BRL"
     }
 return valor.toLocaleString("pt-br",opcoes)
};