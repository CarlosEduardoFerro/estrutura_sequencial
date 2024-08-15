let produto, lucro, valorFinal, usuario

usuario = prompt("Digite seu nome de usuário:")
produto = parseFloat(prompt("Digite o valor do produto que você deseja:"))
lucro = parseFloat(prompt("Digte a porcentagem de acréscimo que deseja adicionar:"))

valorFinal = produto + lucro
document.write(`${usuario}, o valor final será R$ ${valorFinal.toFixed(2)}`)