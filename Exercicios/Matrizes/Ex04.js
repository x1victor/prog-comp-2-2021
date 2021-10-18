// cria a função
let sistemaVendas = () => {
    // vetor de meses
    let meses = ["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    // declara a matriz
    let matriz = []
    let opcao
    do{
        opcao = Number(prompt(`1. Cadastrar vendas \n2. Total vendido em cada mês \n3. Total vendido em cada semana \n4. Total vendido no ano \n5. Sair`))
        switch(opcao){
            case 1: cadastraVendas(matriz,meses)
            break
            case 2: totalVenduidoMes(matriz,meses)
            break
            case 3: totalVendidoSemana(matriz)
            break
            case 4: totalVendidoAno(matriz)
            case 5: alert(`Saindo do programa`)
            break
            default: alert(`Opção inválida`)
        }
    }while(opacão != 5)

}
let cadastraVendas = (matriz,meses) =>{
    for(let i=0;i<12;i++){ // para cada mês
        matriz[i] = []
        alert(`Informe as vendas do mês ${meses[i]}`)
        for(let j=0;j<4;j++){ // para cada semana
            matriz[i][j]= Number(prompt(`Informe o valor vendido na ${j+1}ª. semana `))
        }
    }
    
}
let totalVenduidoMes =(matriz,meses) =>{
    let soma
    for(let i=0;i<12;i++){ // para cada mês
        soma = 0
        for(let j=0;j<4;j++){ // para cada semana
            soma = soma + matriz[i][j]
        }
        // acabou de somar o mês
        alert(`Total vendido no mês ${meses[i]} foi ${soma}`)
    }
}
let totalVendasdoMes = (matriz) =>{
    let soma 
    for(let j=0;j<4;j++){
        soma = 0
        for(let i=0;i<12;i++){
            soma += matriz[i][j]
        }
        // acabaram os meses
        alert(`Soma de vendas da ${j++}ª semana é ${soma}`)
    }
}
let totalVendidoAno = (matriz) => {
    let soma
    for(let i=0;i<12;i++){ // para cada mês
        soma = 0
        for(let j=0;j<12;j++){ // para cada semana
            soma +=  matriz[i][j]
        }
    }
    alert(`Total vendido no ano ${soma}`)
}