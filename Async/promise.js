function soma(x){
    return new promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(x + 5000);
        },3000)
    })
}
soma(200)
.then((resultado)=>{
    console.log(`Resolvido, Resultado: ${resultado}`);
})
.catch()