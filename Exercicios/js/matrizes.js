let matrizes = () =>{
    let matriz = []
    matriz[0] = []//vetor 1
    matriz[1] = []//vetor 2
    matriz[2] = []//vetor 3
    matriz[3] = []//vetor 4

    //entrada de dados
    for(let i = 0;i<4;i++){
        Number(Prompt(`Informe as 4 notas do ${i++}º aluno `))
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe a nota ${i++}º aluno `))
        }
    }
    let soma
    for(let i = 0;i<4;i++){
        for(let j=0;j<4;j++){
            soma = soma +matriz[i][j]
        }
        console.log(`Media do ${i++}º${soma}`)

    }
}