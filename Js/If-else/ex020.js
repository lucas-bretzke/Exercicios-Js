var valor1 = 2
var valor2 = 1
var valor3 = 10

if (valor1 > valor2 && valor2 > valor3) {
    console.log(`Maior ${valor1}, menor ${valor3}`)
} else if (valor1 > valor3 && valor3 > valor2) {
    console.log(`maior ${valor1}, menor ${valor2}`)

} else if (valor2 > valor1 && valor1 > valor3) {
    console.log(`maior ${valor2}, menor ${valor3}`)
} else if (valor2 > valor3 && valor3 > valor1) {
    console.log(`maior ${valor2}, menor ${valor1}`)
    
} else if (valor3 > valor2 && valor2 > valor1) {
    console.log(`maior ${valor3}, menor ${valor1}`)
} else {
    console.log(`maior ${valor3}, menor ${valor2}`)
}