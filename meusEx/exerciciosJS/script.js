function carregar() {

    var msg = window.document.getElementById(`msg`)
    var msg = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = new data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
}

