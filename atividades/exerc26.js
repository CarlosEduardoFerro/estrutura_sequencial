let lado1, lado2, lado3

lado1 = parseFloat(prompt(`Digite o tamanho de um lado do triângulo:`))
lado2 = parseFloat(prompt(`Digite o tamanho de outro lado do triângulo:`))
lado3 = parseFloat(prompt(`Digite o tamanho do ultimo lado do triângulo:`))

if (((lado1 + lado2) > lado3)){
    document.write(`Esse triângulo é valido`)
} else {
    document.write(`Esse triângulo não é valido`)
}