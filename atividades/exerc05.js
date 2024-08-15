let nota1, nota2, nota3, media

nota1 = parseFloat(prompt("Digite a nota 1: "))
nota2 = parseFloat(prompt("Digite a nota 2: "))
nota3 = parseFloat(prompt("Digite a nota 3: "))

media = (nota1 + nota2 + nota3) /3

document.write(media.toFixed(2))