








const minhaConta = new ContaBancaria("Luana", 20, 2500, "Masculino", "9089", "76650", "Conta corrente");
minhaConta.contaCorrente();








class ContaBancaria {
  constructor(nome, idade, salario, sexo, agencia, conta, tipoConta) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
    this.sexo = sexo;
    this.agencia = agencia;
    this.conta = conta;
    this.tipoConta = tipoConta;
  }

  contaPoupanca() {
    const taxa = 0.015; // 1,5% ao mês
    this.salario = this.salario * (1 - taxa);
    this.imprimirDados();
  }

  contaCorrente() {
    const taxa = 0.036; // 3,6% ao mês
    this.salario = this.salario * (1 - taxa);
    this.imprimirDados();
  }

  contaEstudante() {
    const taxa = 0.012; // 1,2% ao mês
    this.salario = this.salario * (1 - taxa);
    this.imprimirDados();
  }

  imprimirDados() {
    console.log("Dados do usuário:");
    console.log("Nome: " + this.nome);
    console.log("Idade: " + this.idade);
    console.log("Salário: " + this.salario);
    console.log("Sexo: " + this.sexo);
    console.log("Agência: " + this.agencia);
    console.log("Conta: " + this.conta);
    console.log("Tipo de Conta: " + this.tipoConta);
  }
}


