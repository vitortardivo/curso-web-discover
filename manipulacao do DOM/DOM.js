const div= document.querySelector("div")

const body = document.querySelector("body")


function sim(){

   let el = document.createElement("h1")
   el.innerHTML = " <h1 onclick='sim()'> Sim </h1>  <button onclick='nao()'> Não </button>"

    body.append(el)


}

const input= document.getElementById("in")

console.log(input)

function nao(){

    let el1 = document.createElement("h1")
    el1.innerHTML = "<h1 onclick='nao()'> Não </h1>  <button onclick='sim()'> Sim </button>"
 
     body.append(el1)
 
 
 }

 function invi(){
    
    let jan = document.querySelector("#janela")

    let confirma = jan.getAttribute('class');

    console.log(confirma)
    
    if( confirma == "invisivel"){

        console.log("if")

        jan.removeAttribute("hidden");

        
 
    }
    else{
        jan.setAttribute("hidden", "")

    }

    jan.classList.toggle("invisivel")

    console.log("entrou no invi antes do if")
    



  




 }

function at(){
    console.log(input.value)


}



 body.addEventListener("keydown" ,function(event){
    const isEsc = event.key === "Escape"

    if(isEsc){
        invi();
    }

 })



 
 
    
