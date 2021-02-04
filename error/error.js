//throw new Error('Ops!, Problemas foram encontrados')

//Tente executar alguma coisa, se der erro execute o catch

function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Ops!, Problemas foram encontrados')
}

function init(){
    try {
        execute()
    } catch (e) {
        console.log('Temos um problema!', e.message)
    }
}

init()
console.log('Depois do erro')
