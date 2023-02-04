/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria X
        • Contar o número de autores X
        • Mostrar livros do autor Auguto Cury X
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor. X
*/


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// console.log(booksByCategory[0])
let bookNumber= 0
let categoria = 0
let autores = 0
for(let category of booksByCategory){


    for(let book of category.books){
        ++ bookNumber
        // console.log(book.title)
    }
   
    categoria ++
    console.log(`numero de livros na categoria ${categoria} é ${bookNumber}`)
    bookNumber = 0
}
categoria =0

// 2****************************
for(let category of booksByCategory){


    for(let book of category.books){
      
        let juncao = []

        if()


        ++ autores
        // console.log(juncao)
    }
   
    categoria ++
    console.log(`numero de autores na categoria ${categoria} é ${autores}`)
    autores = 0
}

console.log("*************************************************")

function findAltor(altor){


for(let category of booksByCategory){


    for(let book of category.books){
        if( book.author == altor){
            console.log( `livro do ${altor} é ${book.title}`)
        }

    }
   
}
}
let Autor = "Robert T. Kiyosaki e Sharon L. Lechter"
findAltor(Autor)




