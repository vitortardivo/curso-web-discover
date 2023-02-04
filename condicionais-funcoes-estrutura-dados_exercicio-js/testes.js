
let contage = 0;


function mais(contagem){

    if(contagem <= 3){

        contagem = contagem + 1;
        console.log("javascript");
    
            contage= contagem
        mais(contagem);
        
    }
}
mais(contage);
console.log(`fim ${contage}`);

let pessoa = {
    nome: "Vitor",
    idade: 21
}


console.log(pessoa);

let lista=[
    "laranja sem franja",
    "uva curva",
    "melancia macia",
    {
        frase :"fruta muta",
       voto: "b17"
    }

]

lista.push("limão na sua mão")
lista.unshift("carambola da hora")


let i=0
let j= lista.length
function listinha(x, z){

if(x<z){
    console.log(lista[x])
    x= x+1;

    
    listinha(x, z)
}
}
listinha(i, j);

console.log(i)

console.log(pessoa);

let Myke = new String("Myke")

console.log(Myke)

console.log(pessoa.nome.replace("V","v"))

let test = 0
function teste(test){
if(test==0){

    throw "não deu"

}
}
console.log("deu")
try{

    teste(0)
}
catch(e){

    console.log(e)
}




