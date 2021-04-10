//Escolha das opções 
var tipoDeConv=prompt("Escolha se deseja converter:"+" 1 - Cm em Metros  2 -Metros em Cm")
//verificação da opção escolhida
if(tipoDeConv=="1"){
  var valorDesejado=prompt("Digite o valor que deseja converter de centimetros para metros:")
  var valConvEmFloat=parseFloat(valorDesejado)
  var calcCmMetros = valConvEmFloat / 100
  alert(calcCmMetros + " Metros")
}
//verificação da opção escolhida
if(tipoDeConv=="2"){
  var valorDesejado=prompt("Digite o valor que deseja converter de metros para centimetros:")
  var valConvEmFloat=parseFloat(valorDesejado)
  var calcMetrosCm = valConvEmFloat * 100
  alert(calcMetrosCm + " Centimetros")
}

/*Projeto antigo*/
/*var valorEmDolar = prompt("Qual o valor em dolar que você quer converter?")

//Float Aceita numeros com decimais
var valorEmDolarNumero=parseFloat(valorEmDolar)
//pega o valor em dolar e multiplica pelo valor pré Determinado
var valorEmReal = valorEmDolarNumero * 5.50
//toFixed determina quantas casas depois da virgula irá aparecer
var valorEmRealDecimal = valorEmReal.toFixed(2)

alert(valorEmRealDecimal)*/


