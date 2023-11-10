



let color = document.get





let paragrafo = document.getElementById('paragrafo01');

paragrafo.style.color = 'red';
paragrafo.style.backgroundColor = 'black';
paragrafo.style.textAlign = 'center';
paragrafo.style.margin = '20px';

let buscaClasse = document.getElementsByClassName('item');
console.log(buscaClasse)
// buscaClasse[3].style.backgroundColor = 'red'
// buscaClasse[0].style.backgroundColor = 'blue'
// buscaClasse[2].style.backgroundColor = 'blue'



// let buscaClasse[0].style.backgroundColor = 'blue';
// let buscaClasse[1].style.backgroundColor = 'blue';
// let buscaClasse[2].style.backgroundColor = 'blue';
// let buscaClasse[3].style.backgroundColor = 'blue';


// percorra a lista utilizando repetição e mudando a cor de cada item

//   variavel      condição           incremento
for(let c = 4; c <= buscaClasse.length; c++){
// agora falta dizer a cor que eu quero aplicar nos itens

//  buscaClasse[c].style.backgroundColor = 'blue'
}



console.log(buscaClasse.lenght)

let acessaParagrafos = document.getElementsByTagName('p')
console.log(acessaParagrafos)


//percorra os paragrafos e altere a cor de texto

for(let i = 0; i <= acessaParagrafos.length; i++){
//   acessaParagrafos[i].style.backgroundColor = 'green'
// }
}
let acessaName = document.getElementsByName('name_item')
console.log(acessaName)

// percorre o array e altere apenas os itens que tem a posição par






for(let z = 0; z <= acessaName.length; z++){
    if(z % 2 == 0){
        acessaName[z].style.color = 'pink'
    }
}



let item2 = document.getElementById('item2');
item2.remove();

let lista = document.getElementById('lista');
let item5 = document.getElementById('item5')

lista.insertBefore(item2, item5.nextSibling)

let retiraEstilo = document.getElementById('messi');
retiraEstilo.style.listStyle = 'none';


















