let numero1, numero2

numero1 = parseFloat(prompt(`Me informe um número`))
numero2 = parseFloat(prompt(`Me informe mais um`))

if (numero1 > numero2)
    document.write(`O número maior é ${numero1}`)

if (numero2 > numero1)
    document.write(`O número maior é ${numero2}`)