function addNums(num1 = 1, num2 = 1, num3 = 1) {
    return num1 + num2 / num3;
   }

   let x = addNums(4, 5, 3); // Chamada da função addNums
   console.log(x);

   let soma = addNums(10, 7)
   console.log("Essa é a soma " + soma)
   
   let z = myFunc(4, 5, 17); // Chamada da função myFunc
   console.log(z);
   
   function myFunc(num1, num2, num3) {
       return num1 * num2 / num3;
   }

   const hello = () => {
    return 'Olá Arrow Function!';
   };
console.log(hello())
console.log(addNums(4,8,8))

function imparPar(num){
    if(num % 2 == 0){
        return (`O número  ${num}é Par `);
    }else if(num % 2 == 1){
return 'Impar';
    }
}
console.log(imparPar(4))



console.clear()



function imparPar(num){
    if(num % 2 == 0){
        return `O número ${num} é par`;
    }else if(num % 2 == 1){
        return `O número ${num} é Impar`;
    }else{
        return `Não consegui identificar se é par ou ímpar`;
    }
}
 let recebePrimeiroNumero = imparPar(5)
 console.log(recebePrimeiroNumero)

 let recebeSegundoNumero = imparPar(5.75)
 console.log(recebeSegundoNumero)

 var contexto = 5.75 % 2;
 console.log(contexto)



const Messi = {
    controleDeBola: 'Perfeito',
    dribles: 'Sensacional',
    passes: 'Único !!!!!!!!!!!!!!!!!',
    finalização: 'Sem comparações',
    títulos: 'O MAIOR!!!!!!!'

}

console.log(Messi)




const boasVindas = () => {
    alert('Messi maior e melhor do mundo');
    console.log('Bem vindo a nossa página');
    };
    const eventClique = () => {
    console.log('Você clicou no botão');
    };

    const mouseEmCima = () => {
        console.log('Mouse está em cima do título');
        };














