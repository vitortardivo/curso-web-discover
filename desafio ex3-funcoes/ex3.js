//let nota = 50;

// let nota = 90;
// for(let notaa = nota; notaa > 40; notaa = notaa - 10){
//     if(notaa >= 90){
//         console.log("A");
//     }
//     if(notaa >= 80 && notaa <= 89){
//         console.log("B")
//     }
//     if(notaa>= 70 && notaa<= 79){  
//           console.log("C")
//     }
//     if(notaa>= 60 && notaa<= 69){  
//           console.log("D")
//      }
    
//     if(notaa < 60){ console.log("F")}

// }





let saldo = {


    des: [20, 30],
    

    res: [ 10, 20, 20]


}

function total (arry){
    console.log('Entrou Total!')
    let totalr = 0;
    for(let i of arry){

    
        totalr=totalr + i;
    
        console.log('>>> ', totalr)
    }
    console.log('Saiu Total!')

    return totalr;
}




let receita = total(saldo.res);
console.log('receita: ', receita);

let despesa = total(saldo.des);
console.log("despesa de ", despesa)
totall= receita - despesa;

if(totall<0){

    console.log(`saldo negativo de ${totall}`)
}
else{
    console.log(`saldo positivo de ${totall}`)
}

for( let int of saldo.res){

    console.log(`receita de ${int} `)

}
for( let int of saldo.des){

    console.log(`despesas de ${int} `)

}

console.log("terceira")


/*********************************************************** */
let temperatura= "2000c"
let tam = temperatura.length

let letra = 4

function numeros(temp){
    let totalt= ""

    for(let t of temp){

        //console.log(`percorrendo ${t}`)
    
        if(t=="C" || t == "F" || t=="c" || t== "f"){
            console.log("entrou no if")
            return totalt
        } 
      
    
        totalt= totalt + t
        //console.log(`total ${totalt}`)

        //console.log(`depois do if em ${t}`)
 
    }

}


 let num = numeros(temperatura)

 let nume = Number(num)

 console.log(`nume e ${nume}`)

 function conversao(T){

    if(T == "F" || T == "f"  ){

      let TC = nume * 9/5 + 32 
    
        
      console.log(`o numero deu ${TC}C`)
        return TC
        
     }
     else{

        let TF = (nume-32)*5/9
        console.log(`o numero deu ${TF}F`)
        return TF

     }

 }
let Tem = conversao(temperatura[letra])

console.log(temperatura[letra])

//letra(temperatura);

console.log(`numeros sao ${Tem}`)


