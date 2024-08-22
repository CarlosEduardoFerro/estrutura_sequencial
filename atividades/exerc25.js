let multiplo

multiplo = parseFloat(prompt(`Digite um número:`))

if ((multiplo %3 == 0) && (multiplo %5 == 0)) {
    document.write(`${multiplo} é multiplo e 3 e de 5`)
} else {
    document.write(`burro`)
}