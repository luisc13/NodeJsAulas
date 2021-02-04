require('./subdirectory/sub')
console.log('-----------------------------------')
console.log(`Nome do Arquivo `, __filename)
console.log(`Diretório do Arquivo: `, __dirname)
//console.log(`Parâmetros de execução: `, process.argvb)
console.log(`Diretório em que foi invocado:`, process.cwd())
console.log(`Systema Operacional(SO): `, process.env.OS)
console.log(`Usuário no SO: `, process.env.USERNAME)
console.log(`Idioma: `, process.env.LANG)
console.log(`Nome do Server: `, process.env.COMPUTERNAME)

switch (key) {
    case '-a':
        console.log('Execute a rotina principal')
        break;
    case '-i':
        console.log('Execute a instalação')
        break;
    case '-q':
        console.log('Encerrando Aplicação')
        process.exit()//Interrompe imediatamente o código
        break
    default:
        console.log('Parâmetro invalido')
        break;
}
console.log(`Ambiente do Servidor`, process.platform)