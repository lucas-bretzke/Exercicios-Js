var salario = 200
var mais20 = salario + (20 / 100) * salario
var mais15 = salario + (15 / 100) * salario
var mais10 = salario + (10 / 100) * salario
var mais5 = salario + (5 / 100) * salario

console.log(`\nsalario anterior ${salario}`)

if (salario < 280) {
    console.log(`Atual ${mais20} aumento de 20%`)

} else if (salario > 280 && salario < 701) {
    console.log(`Atual ${mais15} aumento de 15%`)

} else if (salario > 700 && salario < 1501) {
    console.log(`Atual ${mais10} aumento de 10%`)

} else if (salario > 1500) {
    console.log(`Atual ${mais5} aumento de 5%`)
}
