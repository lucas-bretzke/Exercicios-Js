const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

// Ex: 1
// (async () => {
//     try {
//         const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
//         const nomes = data.toString("utf-8").split(EOL)

//         console.log(nomes.filter(nome => nome[0].toUpperCase() === "D"));
//     } catch (err) {
//         console.log(err.message);
//     }
// })();


// Ex: 2
// async function getUserByName(name) {
    // 1) Ler o arquivo
    // const data = (await fsp.readFile(path.resolve("users.json"))).toString("utf-8");    
    
    // 2) Converter o JSON recebido para objeto
    // const users = JSON.parse(data);    
    
    // 3) Usar o método find dos vetores para procurar o nome
//    const user = users.find(user => user.nome === name);

   // 4) Retornar o que foi encontrado
//    return user;
// }

// (async () => {
   // 5) Chamar a função
//    const user = await getUserByName("Pedr");
   
   // 6) Verificar se o usuário foi encontrado 
   //      * Se foi encontrado mostrar os dados dele
   //      * Se não foi encontrado mostrar "Usuário não encontrado"
//    if (user) {
//        console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
//    } else {
//        console.log("Usuário não encontrado");
//    }
// })();

// Ex: 3
(async () => {
    try {
        const chalk = require('chalk'),
            data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt")),
            nomes = data.toString("utf-8").split(EOL)

        let nomeComA = chalk.red(nomes.filter(nome => nome[0].toUpperCase() === "A")),
            nomeComC = chalk.blue(nomes.filter(nome => nome[0].toUpperCase() === "C")),
            nomeComD = chalk.magenta(nomes.filter(nome => nome[0].toUpperCase() === "D"));

        console.log(`${nomeComA}\n${nomeComC}\n${nomeComD}`)
    } catch (err) {
        console.log(err.message);
    }
})();