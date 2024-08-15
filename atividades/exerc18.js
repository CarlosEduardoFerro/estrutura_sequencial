let titulo, tempo, tempoh, tempoMin, minutos

titulo = prompt(`Informe o título do filme desejado:`)
document.write(`Título: ${titulo}<br>`)
tempoMin = parseFloat(prompt(`Digite quantos minutos o filme tem: `))

tempoh = Math.floor(tempoMin / 60) 
minutos = tempoMin % 60

document.write(`Tempo de duração: ${tempoh}:${minutos}`)