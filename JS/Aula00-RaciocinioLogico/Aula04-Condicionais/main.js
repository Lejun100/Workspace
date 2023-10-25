let professoraBateAluno = true
let professoraXingaAluno = true

if(professoraBateAluno == true && professoraXingaAluno == true){
    console.log("Professora promovida com sucesso!!!")
}




if(professoraBateAluno == true ||  professoraXingaAluno == true){
    console.log("Professora promovida com sucesso!!!")
}



let numero1 = 10
let numero2 = 4

if(numero1 - numero2){
    console.log("Os dois são diferentes")
}

let comidaNaTOTVS = false

if(!comidaNaTOTVS == true){
    console.log("Não vou nem almoçar, Alexsandro o brabo")
}else{
    console.log("Você terá que almoçar pobre")
}



let numero = 11

if(numero % 2 == 0){
    console.log("O número " + numero + " é par")
}else{
    console.log(`O número " + ${numero} + " é impar`)
}


let morangoMaduro = null
if(morangoMaduro == true){
    console.log("Pode comer")
}else if(morangoMaduro == false){
    console.log("Não come")
}else{
    console.log("Seu morango está mofado")
}

console.clear()
  var raizQuadrada = Math.sqrt(1995)
  console.log(raizQuadrada)


  let caminhosDaVida = 9
  let idade = 20

  if(caminhosDaVida == 9){
    console.log("Você está radiante!!!");
    if(idade == 20){
        console.log("Talvez tu esteja vein")
    }else{
        console.log("Você está novinho")
    }
  }





  let fase2 = 70
  let fase3 = false
  let inscrição = true

  if(inscrição == true){
    console.log("Parabéns você está na fase 2");
    if(fase2 >=70){
        console.log("QUESTIONÁRIO DE LÓGICA E LEITURA")
    }else if(fase2 >=65 || fase2 <=69){
        console.log("Você terá uma segunda chance")
    }else{
        console.log("Você não passou na fase 2")
    }
  }