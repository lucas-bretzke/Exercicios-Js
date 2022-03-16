var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem) {
    case 0 :
        console.log(`Dom`)
        break
    case 1 :
        console.log(`seg`)
        break
    case 2 :
        console.log(`ter`)
        break
    case 3 :
        console.log(`qua`)
        break
    case 4 :
        console.log(`qui`)
        break
    case 5 :
        console.log(`sex`)
        break
    case 6 :
        console.log(`sab`)
        break
        default:
            console.log(`dia invalido`)
            break
}