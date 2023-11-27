function criarObjeto() {
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var matriculado = document.querySelector('input[name="matriculado"]:checked');
    var endereco = document.getElementById("endereco").value;
  
    if (nome && dataNascimento && matriculado && endereco) {
      // Calculando a idade com base na data de nascimento
      var dataNascimentoDate = new Date(dataNascimento);
      var hoje = new Date();
      var idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
  
      // Verificando se a idade está entre 7 e 17 anos
      if (idade >= 7 && idade <= 17) {
        var inscrito = {
          nome: nome,
          dataNascimento: dataNascimento,
          matriculado: matriculado.value === "sim",
          endereco: endereco
        };
  
        var mensagem = `${inscrito.nome} - ${inscrito.dataNascimento} - ${inscrito.endereco} - Está inscrito`;
  
        alert(mensagem);
      } else {
        alert("NÃO está inscrito porque não atende aos requisitos.");
      }
    } else {
      alert("Por favor, preencha todos os campos do formulário.");
    }
  }