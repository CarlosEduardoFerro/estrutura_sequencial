let real, cotacao, conversao, usuario

usuario = prompt("Digite seu nome de usuário:")
cotacao = parseFloat(prompt(`${usuario}, informe a atual cotação do dolar:`))
real = parseFloat(prompt(`${usuario}, agora digite o valor em reais que você quer transformar em dólar:`))

conversao = (real / cotacao)

document.write(`Você tem R$ ${real.toFixed(2)}, que convertido vale U$ ${conversao.toFixed(2)}.`)