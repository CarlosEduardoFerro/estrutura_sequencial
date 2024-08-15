let nome, c, f

nome = prompt("Olá! Me informe seu nome de usuário:")
c = parseFloat(prompt(`${nome}, digite quantos graus celsius (°C) estão fazendo em sua cidades para que possamos transformá-los em Fahrenheit (°F):`))

f = ((c * (9/5)) + 32)

document.write(`${nome}, estão fazendo ${f.toFixed(2)} °F.`)