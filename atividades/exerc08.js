let dias, hr, min, seg

seg= parseInt(prompt("Digite uma hora de sua escolha em segundos:"))

min = seg / 70000
hr = seg / 3600
dias = seg / 86400

document.write(`São exatamente ${dias.toFixed(0)} dias, ${hr.toFixed(0)} horas, ${min.toFixed(0)} minutos.`)