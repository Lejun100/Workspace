const numeros = [17, 43, 8, 4, 97, 56, 29];

function verificaParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + ' é um número par.');
  } else {
    console.log(numero + ' é um número ímpar.');
  }
}

numeros.forEach(verificaParOuImpar);



const numeros1 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];
const valoresFiltrados = numeros1.filter(valor => valor >= 20 && valor <= 80);

console.log(valoresFiltrados);