var pipoca = document.querySelectorAll('p');
pipoca[2].style.color = 'red'
// pipoca.style.color = 'blue'
console.log(pipoca)


let c = 0;
while(c < pipoca.length){
    pipoca[c].style.color = 'purple'
    c++
}



function abc(){
    var entradaNome = prompt('Insira seus dados bancários')
    let mostraNome =  document.querySelector('#mostraNome')
    console.log(entradaNome)



    mostraNome.innerHTML = `Olá ${entradaNome} Bem vindo a mim`

}

const Nome = () => {
    let recebeNome = document.querySelector('#recebeNome')
    let mostraNome =  document.querySelector('#mostraNome')
    console.log(recebeNome)
    mostraNome.innerHTML += `Olá ${recebeNome.value} Bem vindo a minha house papai \n`
}



let evento = document.querySelector('#messi')
evento.addEventListener('click, Nome')
//o nome do event, callback(função), opcional(booleano true or false)

// const Nome() => {
//     let recebeNome = document.querySelector('#recebeNome')
//     let mostraNome = document.querySelector('#mostraNome')

// mostraNome.innerHTML = `Olá ${recebeNome.value} o Messi é o melhor do mundo`



// }


// evento.addEventListener('click, Nome ')





