let salario, reajuste, aumento, usuario

aumento = (25/100)

usuario = prompt("Digite seu nome de usuário:")
salario = parseFloat(prompt(`${usuario}, informe seu salário:` ))

reajuste = (salario) * (aumento)

document.write(`o aumento foi de ${reajuste}`)