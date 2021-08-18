function questao2() {
//declaração de vetor
let jogadores = []
let pontuacao = []
//entrada de dados
for(let i=0; i<12; i++){
    jogadores.push(prompt(`informe o nome do jogadore`))
    pontuacao.push(Number(prompt(`Informe a pontuação do jogador ${jogadores[i]}`)))
}
let soma = 0
for(let i=0;i<12;i++){
    soma = soma + pontuacao[i]
}
alert(`A média de pontuação do time é de ${soma/12}`)
}
// calcular o cestinha
let maior = 0
let nome = ""
for(let i = 0;i<12;i++){
    if(pontuacao[i] > maior){
        maior = pontuacao[i]
        nome = jogadores[i]
    }
}

let pares = []
for(let i=0;i<12;i++){
    if(pontuacao[i] % 2 == 0){
        pares.push(jogadores[i])
    }
}
alert(pares)
console.log(`O cestinha do time é ${nome} com ${maior} pontos`)
