// 10) Escreva	um programa que	leia as	medidas	dos	lados de um	triângulo e	
// escreva	se ele é Equilátero, Isósceles ou Escaleno.	Sendo que:	
// − Triângulo	Equilátero:	possui os 3 lados iguais.	
// − Triângulo	Isósceles: possui 2	lados iguais.	
// − Triângulo	Escaleno: possui 3 lados diferentes.

let lado1 = 1
let lado2 = 100
let lado3 = 10

if (lado1 == lado2 && lado1 == lado3) {
    console.log(`equilatero`)
} else if (lado1 != lado2 && lado1 != lado3 && lado2 == lado3) {
    console.log(`escaleno`)
} else {
    console.log(`é isoceles`)
}