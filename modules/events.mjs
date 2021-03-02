import {EventEmitter} from 'events'

class Evento extends EventEmitter {}
const meuEvento = new Evento()

// subscriber - assinante
meuEvento.on('seguranca',(x,y) =>{
    console.log(`Executando o evento 'segurança'${x} ${y}`)
})

//publisher - emissor
meuEvento.emit('segutanca','userAdmin','Alterou salário')

meuEvento.on('Encerrar', (dados)=>{
    console.log('Assinante: '+ dados)
})

meuEvento.emit('encerrar', 'Encerrando a execução da importação dos dados!')