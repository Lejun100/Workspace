
let inserindo = false;



function adicionarImagem() {
    if (!inserindo){    
    const imagem = document.createElement("img");
    imagem.src = "img/legiao_9yCgFqQUbXJ4.png.webp";
    document.body.appendChild(imagem);
    inserindo = true;
    }
   
    document.body.appendChild(imagem);
  
   

    document.body.style.backgroundColor = "#262525";
  
    const botao = document.getElementById("B_01");
    botao.style.border = "2px solid #D9BC66";
    botao.style.padding = "0.5rem";
    botao.style.backgroundColor = "#BFBFBF";
    botao.style.margin = "0.7rem";
  }
  
  function solicitarNome() {
    const nome = prompt("Digite seu nome:");
    if (nome !== null) {
      const mensagem = document.createElement("p");
      mensagem.textContent = `Olá ${nome}, bem-vindo à nossa academia`;
      document.body.appendChild(mensagem);
    }
  }
  
  function exibirTabuada() {
    const numero = prompt("Digite um número para ver a tabuada:");
    if (numero !== null) {
      const resultado = document.createElement("p");
      resultado.textContent = `Tabuada do ${numero}:\n`;
  
      for (let i = 1; i <= 10; i++) {
        const linha = `${numero} x ${i} = ${numero * i}\n`;
        resultado.textContent += linha;
      }

      document.body.appendChild(resultado);
    }
  }

function remove(){
    document.body.innerHTML = '';
}





  