let number

number = parseFloat(prompt(`Me informe um número:`))

if (number > 0) {
    document.write(`${number} é positivo.`)
} else {
    document.write(`${number} é negativo.`)
}