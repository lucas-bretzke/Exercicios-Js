var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log(`agora säo ${hora} horas bom dia`)
} else if (hora <= 18) {
    console.log(`agora säo ${hora} horas boa tarde`)
} else {
    console.log(`já säo ${hora} horas boa noite`)
}