var escolhaValor = parseInt(prompt("Escolha o estilo de jogo: \n" + "1 - Entre 0 e 10 \n" + "2 - Entre 1 e 10 \n" + "3 - entre 0 e 100"))

if(escolhaValor == 1){
  var numeroSecreto = parseInt(Math.random() * 11)
  var tentativas = 3

//WHILE ENQUANTO FOR VERDADE execute 
  while(tentativas > 0){
    var chute=parseInt(prompt("Digite um número entre 0 e 10"))
    if(numeroSecreto == chute){
     alert("Acertouu!!!")
      break
      //console.log("Acertouu!!!")
    }
    else if (chute > numeroSecreto){
      //console.log("O número secreto é menor")
      alert("O número secreto é menor")
        tentativas = tentativas - 1
    }
    else if (chute < numeroSecreto){
     // console.log("O número secreto é maior")
      alert("O número secreto é maior")
        tentativas = tentativas - 1
    }
  }

  if (chute != numeroSecreto){
    alert("Suas Tentativas acabaram, O número secreto era "+ numeroSecreto)
  }
}
/* */
else if(escolhaValor == 2){
  var numeroSecreto = parseInt(Math.floor(Math.random() * (10 - 1)))
  var tentativas = 3

//WHILE ENQUANTO FOR VERDADE execute 
  while(tentativas > 0){
    var chute=parseInt(prompt("Digite um número entre 1 e 10"))
    if(numeroSecreto == chute){
     alert("Acertouu!!!")
      break
      //console.log("Acertouu!!!")
    }
    else if (chute > numeroSecreto){
      //console.log("O número secreto é menor")
      alert("O número secreto é menor")
        tentativas = tentativas - 1
    }
    else if (chute < numeroSecreto){
     // console.log("O número secreto é maior")
      alert("O número secreto é maior")
        tentativas = tentativas - 1
    }
   
  }

  if (chute != numeroSecreto){
    alert("Suas Tentativas acabaram, O número secreto era "+ numeroSecreto)
  }
}
/* */
else if(escolhaValor == 3){
var numeroSecreto = parseInt(Math.random() * 101)
var tentativas = 3
//WHILE ENQUANTO FOR VERDADE execute 
  while(tentativas > 0){
    var chute=parseInt(prompt("Digite um número entre 0 e 100"))
    if(numeroSecreto == chute){
     alert("Acertouu!!!")
      break
      //console.log("Acertouu!!!")
    }
    else if (chute > numeroSecreto){
      //console.log("O número secreto é menor")
      alert("O número secreto é menor")
        tentativas = tentativas - 1
    }
    else if (chute < numeroSecreto){
     // console.log("O número secreto é maior")
      alert("O número secreto é maior")
        tentativas = tentativas - 1
    }
  }

  if (chute != numeroSecreto){
    alert("Suas Tentativas acabaram, O número secreto era "+ numeroSecreto)
  }
}
