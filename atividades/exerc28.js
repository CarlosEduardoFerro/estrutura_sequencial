let brasil, franca, franca2

brasil = parseFloat(prompt(`Informe a hora atual no Brasil para convertemos para o horário da França:`))

if ((brasil > 24) && (brasil < 0)) { 
    document.write(`burro`)
} else {
    franca = (brasil + 5)
    if (franca >=24) {
        franca2 = franca - 24

        document.write(`são exatamente ${franca2} horas`)
    } else { 
        document.write(`são exatamente ${franca} horas`)
    }
}
