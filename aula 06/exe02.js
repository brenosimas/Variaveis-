/* 
Considerando duas notas , calcule a média e use uma estrutura de decisão para exibir se o aluno foi aprovado0 (média >= 6), em recuperação (média entre 4 e 5.9) ou reprovado (média < 4). 
 */


let nota1 = 6
let nota2 = 7

let media  = (nota1 + nota2) / 2 

if ( media >= 6) {
    console.log ("Aluno aprovado")
}
else if (media >= 4 && media <= 5.9 ) {
    console.log ("Aluno em recuperação")
}
else {
    console.log("Aluno reprovado")
}
