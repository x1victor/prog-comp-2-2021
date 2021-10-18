let Inicio = () =>{
    let notaAluno =[]
    let aluno = [15]
    let media
    let soma 
    for(let i =0;i<3; i++){
        notaAluno[i] = []
        notaAluno[i]=prompt(`Digite seu nome: `)
        for(let j = 1;j <=5; j++){
            notaAluno[i][j]= Number(prompt(`Digite sua nota na ${j}ª prova `))
        }
        aluno[i] = notaAluno[i]
    }
    for(let i in notaAluno){
        media = 0
        soma = 0
        for(let j in notaAluno){
            soma = soma + notaAluno[i][j] 
        }
        media = soma 
        alert(`A média de ${aluno[i]} foi ${media}.`)
    }
}
