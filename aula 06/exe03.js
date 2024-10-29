/*
Dado três lados de um triângulo , determine se ele é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes) e exiba o tipo no console.
*/


let lado1 = 10
let lado2 = 20
let lado3 = 24

if ( lado1 === lado2 && lado2 === lado3 ) {
    console.log ("triangulo equilatero ")
}
else if ( lado1 === lado2 || lado1 === lado3 || lado2 === lado3 ) {
    console.log("triangulo isósceles")
}
else {
    console.log ("triangulo escaleno")
}