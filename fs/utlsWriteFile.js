const {promisify} = require('fs')


const writeFile = promisify(require('fs').writeFile);
const conteudo = `criando um arquivo utilizando promsify do módulo nativo util`

writeFile('utilArquivo.txt', conteudo)
    .then(()=>{console.log('Arquivo utilArquivo criado com sucesso')})
    .catch(()=>{console.log(`Deu erro: ${err}`)})