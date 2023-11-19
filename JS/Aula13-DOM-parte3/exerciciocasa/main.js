

const label = document.createElement("label");
label.setAttribute("for", "salarioAtual");
label.textContent = "Salário Atual: ";


const inputSalario = document.createElement("input");
inputSalario.type = "text";
inputSalario.id = "salarioAtual";
inputSalario.placeholder = "Insira o salário atual";


const button = document.createElement("button");
button.textContent = "Calcular Novo Salário";
button.onclick = calcularNovoSalario;


const resultadoElemento = document.createElement("p");
resultadoElemento.id = "resultado";


document.body.appendChild(label);
document.body.appendChild(inputSalario);
document.body.appendChild(button);
document.body.appendChild(resultadoElemento);


function calcularNovoSalario() {
 
  const salarioAtual = parseFloat(inputSalario.value);

 
  if (isNaN(salarioAtual) || salarioAtual <= 0) {
    alert("Por favor, insira um valor válido para o salário atual.");
    return;
  }


  const aumentoPercentual = 17;
  const reajusteAnual = 215;

  const aumento = (salarioAtual * aumentoPercentual) / 100;
  const novoSalario = salarioAtual + aumento + reajusteAnual;

 
  resultadoElemento.textContent = `O novo salário é R$ ${novoSalario.toFixed(
    2
  )}`;
}

