let dolar, cotacao, conversao, usuario

usuario = prompt("Digite seu nome de usuário:")
cotacao = parseFloat(prompt(`${usuario}, informe a atual cotação do real:`))
dolar = parseFloat(prompt(`${usuario}, agora digite o valor em dólar que você quer transformar em reais:`))

conversao = (cotacao / dolar )

document.write(`Você tem U$ ${dolar.toFixed(2)} dolares, que convertido vale R$ ${conversao.toFixed(2)}.`)