let usuario, salario,salarioFinal, comissao, vendas

usuario = prompt("Digite seu nome de usuário:")
salario = parseFloat(prompt("Digite seu salário fixo:"))
vendas = parseFloat(prompt("Digite quantas vendas você fez esse mês:"))

comissao = vendas * (1.15)
salarioFinal = comissao + salario

document.write(`${usuario}, você receberá R$ ${salarioFinal}`)