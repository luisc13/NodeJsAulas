console.log('Exibindo uma mensagem no console!')

console.error(new Error('Exibindo mensagem de erro, temos problemas!'))

const carros = ['GM', 'Fiat', 'Ford', 'VW', 'Renault', 'Honda', 'Hyundai']

console.table(carros)

const dados = {name: 'Luis Carlos', empresa: 'Me Contrate'}

console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('resetando o processo')
console.countReset('processo')

console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
   // console.log('-')
}
console.timeEnd('contador')

console.assert(true, 'faça alguma coisa')
console.assert(false, 'Ih rapaz %s, que pena!', 'Não Funcionou')

//console.clear()