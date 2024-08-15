//Casting -> processo de converte os tipos de dados de uma variável.
/** Dois tipos
 * parseInt() -> converter para um inteiro
 * parseFloat() -> converter para um Flutuante
 */
//Para resolver um algoritimo eu tenho que seguir 3 passos
//1° determinar os dados de entrada (variaveis e comandos)
let nota1, nota2, soma
//Comando para entrada de dados
nota1 = parseInt(prompt("Digite sua nota"))
nota2 = parseFloat(prompt("Digite sua nota"))

//2° processamento -> trabalhar com as variaveis
soma = nota1 + nota2

//3° saida do processamento. saída de dados
//Comandos para saida de dados
document.write(soma)
document.write('-------> ')
document.write(typeof soma)