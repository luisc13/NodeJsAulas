const Buffer = require('buffer').Buffer

const buffer = Buffer.from('Curso Completo de node js')

console.log(buf.toString());
console.log(buffer.toString('utf16le'));

const buf_string = Buffer.from('carregando uma string', 'utf-8');
console.log(buf_string.toString())
console.log(Buffer.isBuffer(buf_string))
console.log(buf_string.toString('utf-8', 0,10));