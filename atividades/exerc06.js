let variavelA, variavelB, variavelX

variavelA = parseFloat(prompt("digite um valor"))
variavelB = parseFloat(prompt("digite outro valor"))

document.write(`<h1>Antes</h1>
A = ${variavelA}<br>
B = ${variavelB}`)

variavelX = variavelA
variavelA = variavelB

document.write(`<h2>Depois</h2>
A = ${variavelA}<br>
B = ${variavelX}`)