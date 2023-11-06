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





  let fase2 = 80
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


  
  
  
  let pipoca1 = 10
  let pipoca2 = 56

  if(pipoca1>pipoca2){
    console.log(pipoca1 + " é maior") //escopo de bloco
  }else{
    console.log(pipoca2 + " é maior")
  }

  pipoca1 > pipoca2 ? console.log(pipoca1 + " é maior") :
  console.log(pipoca2 + "é maior;")

  let mounth = 3
 
  switch(mounth){
    case mounth == 3:
        console.log("Março")
        break;
        case mounth == 4:
            console.log("Abril")
            break;
            case  10:
                console.log("Outubro")
                break;
            case  12:
            console.log("Dezembro")  
            break;  
            default:
                console.log("Não encontrei o mês")
  }


 
  var escopo = true    // escopo global
 
  if(escopo){
    console.log(escopo)
}

switch(escopo){
    case true:
        console.log("Variável escopo é global")
        break;
        default:
            console.log("Não existe variáveis")
}



var passouOuNao = true

if(passouOuNao == true){
    var fase = 0
    fase = 1
}


if(passouOuNao == true){
    fase = 2
}