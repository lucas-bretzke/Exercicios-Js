var valorHora = 6
var salarioBruto = (valorHora * 220)

var liquido = salarioBruto - (3 / 100) * salarioBruto

if (salarioBruto < 900) {
    console.log(`${liquido}`)
} else if (salarioBruto < 1500) {
    console.log(`${liquido - (5 / 100) * salarioBruto}`)
}