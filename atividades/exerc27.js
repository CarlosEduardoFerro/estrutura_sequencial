let ano

ano = parseFloat(prompt(`Em que ano estamos?`))

if (ano%4 == 0 ) {
    document.write(`Estamos em um ano bissexto`)
} else {
    document.write(`Estamos em um ano normal`)
}