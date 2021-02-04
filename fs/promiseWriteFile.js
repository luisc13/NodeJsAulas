const {writeFile} = require ('fs')

function criarArquivo(name, content){
    return new Promise((resolve, reject) =>{
        writeFile(name, content, err=>{
            if(err) return reject(err)
            resolve()
        })
    })
}

criaArquivo('promiseArquivo.txt', 'criando um arquivo utilizando promises')
    .then(() => console.log('arquivo promiseArquivo.txt Criado com sucesso!'))
    .catch(err => console.log(err))