class contaBancaria{
    constructor(){
        nome= 'Luana Sakai';
        idade= '20';
        salário= '1500';
        sexo= 'Feminino';
        agência= 'Banco Pipoca';
        conta= 'corrente';
        tipoConta= '';
    }

}





console.log(contaBancaria)









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
  
  // Exemplo de uso:
  const minhaConta = new ContaBancaria("João", 30, 5000, "Masculino", "1234", "56789", "Conta Poupança");
  minhaConta.contaPoupanca();















































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
      if (this.tipoConta === "Poupança") {
        const taxa = 0.015; // 1,5% ao mês
        this.salario -= this.salario * taxa;
      }
    }
  
    contaCorrente() {
      if (this.tipoConta === "Corrente") {
        const taxa = 0.036; // 3,6% ao mês
        this.salario -= this.salario * taxa;
      }
    }
  
    contaEstudante() {
      if (this.tipoConta === "Estudante") {
        const taxa = 0.012; // 1,2% ao mês
        this.salario -= this.salario * taxa;
      }
    }
  }
  
  // Instanciando 3 objetos da classe ContaBancaria
  const conta1 = new ContaBancaria("Alice", 25, 3000, "Feminino", "12345", "54321", "Poupança");
  const conta2 = new ContaBancaria("Bob", 30, 5000, "Masculino", "54321", "98765", "Corrente");
  const conta3 = new ContaBancaria("Carol", 22, 2500, "Feminino", "67890", "45678", "Estudante");
  
  // Aplicando os descontos conforme o tipo de conta
  conta1.contaPoupanca();
  conta2.contaCorrente();
  conta3.contaEstudante();
  
  // Exibindo informações no console
  console.log("Dados do usuário 1:");
  console.log("Nome: " + conta1.nome);
  console.log("Idade: " + conta1.idade);
  console.log("Saldo após desconto: " + conta1.salario);
  
  console.log("\nDados do usuário 2:");
  console.log("Nome: " + conta2.nome);
  console.log("Idade: " + conta2.idade);
  console.log("Saldo após desconto: " + conta2.salario);
  
  console.log("\nDados do usuário 3:");
  console.log("Nome: " + conta3.nome);
  console.log("Idade: " + conta3.idade);
  console.log("Saldo após desconto: " + conta3.salario);