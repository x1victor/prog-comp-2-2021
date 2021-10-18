let matriz = () =>{
    let matriz = []
    for(let i in 5){
        matriz[i]=[]
        for(let j in 5){
            matriz[i][j] = Number(prompt(`Digite os numeros da matriz`))
        }
    }
}