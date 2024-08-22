let idade

idade = parseFloat(prompt(`Me informe sua idade:`))

if (idade > 18) {
    document.write(`Pode dirigir`)
} else {
    document.write(`Passa a chave`)
}