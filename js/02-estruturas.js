/* Estruturas de Dados 

- Arrays (Vetores/Matrizes): 
Lista de dados indexados, sequenciais e acessíveis por um
índice numérico.

- Objetos
Lista de dados não indexados e formados por propriedades
e valores. */

// Arrays (os índices sempre começam no zero)
let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos); // saída direta/estruturada (APENAS NO console)
console.log(cursos[2]); // SQL

/* Exercícios
1) Crie uma constante chamada "dados" e coloque nela
os dados de uma pessoa: nome, sobrenome, idade, telefone e cidade */
const dados = ["Fulano", "Silva", 25, "11-2135-0300", "São Paulo"];

/* 2) Mostre no console uma mensagem contendo somente o nome e a idade
da pessoa. Exemplo: "Fulano tem 25 anos." */
console.log(dados);
console.log(`${dados[0]} tem ${dados[2]} anos.`);

console.log("----------");

// Objeto
let carro = {
    marca: "Fiat",
    modelo: "Uno com escada",
    portas: 2,
    cor: "branco",
    opcionais: ["Ar condicionado", "Vidros elétricos", "Alarme"]
};

console.log(carro);
console.log(carro.modelo);
console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}`);
console.log(`Este carro tem ${carro.opcionais[0]} e ${carro.opcionais[2]}`);

/* Exercícios
1) Crie um novo objeto contendo informações de algo que você gosta
(filme, livro, comida, jogo etc) */
let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: 3,
    genero: "Aventura"
};

/* 2) Mostre uma mensagem com pelo menos 2 propriedades do objeto
que você criou. */
console.log(`O universo ${livro.titulo} foi criado por ${livro.autor}`);

console.log("----------------");

// Objeto com array e com outro objeto
let pessoa = {
    nome: "Shiryu",
    idade: 20,
    telefones: ["11-2135-0300", "11-91234-5678"],
    medidas: {
        peso: 65,
        altura: 1.75
    }
};

console.log(`Nome: ${pessoa.nome}`);
console.log(`Celular: ${pessoa.telefones[1]}`);
console.log(`Peso: ${pessoa.medidas.peso} kg `);

//array de objeto 
let aluno = [
    {
        nome: "naruto",
        idade: 10

    },
    {
        nome: "guts",
        idade: 30
    },
    {
        nome: "seiya",
        idade: 120
    }
];

console.log(aluno[1].nome);
console.log(aluno[0].nome);
console.log(`originalmente o cavaleiro de pegazos era o ${aluno[2].nome}`)




