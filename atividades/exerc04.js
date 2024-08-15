let dist, comb

dist = parseFloat(prompt("diga a distância total percorrida:"))
comb = parseFloat(prompt("digite o total de combustível gasto:"))

document.write(`${dist/comb.toFixed(2)} Km/l`)