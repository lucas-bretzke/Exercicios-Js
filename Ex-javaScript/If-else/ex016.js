// 14) Leia o salario de um trabalhador e o valor da prestação de um empréstimo. Se a prestaçao
// for maior que 20% do salário imprima: “empréstimo não concedido”, caso contrario imprima:
// “empréstimo concedido”.

let salario = 3000
let prestacao = 500

if (prestacao > ((20 / 100) * salario)) {
    console.log(`não concedido`)
} else {
    console.log(`concedido`)
}