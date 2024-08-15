let capital, tempo, taxa, usuario, dinheiro

taxa = (1.07)
tempo = (1)

usuario = prompt("Digite seu nome de usuário:")
capital = parseFloat(prompt(`${usuario}, informe o capital inverstido:`))

dinheiro = (capital) * ((tempo) * (taxa))

document.write(`Em um mês você vai ter R$ ${dinheiro.toFixed(2)}.`)