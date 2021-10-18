let sistemaImobiliaria = () =>{
    let opcao
    let vetImoveis = [] // vetor de imóveis tamanho
    do{
        opcao = Number(prompt(`Informe \n1. cadastra \n2.consulta A \n3. Consulta B\n4. Consulta C \n5. Sair`))
        switch(opcao){
            case 1:
                cadastraImovel(vetImovel)
            case 2: let tipo = prompt(`Qual tipo de imóvel A, B ou C`).toUpperCase()

            consultaImoveis(vetImoveis,tipo)
                break
            case 3: consultaValorTotal(vetImoveis)
                break
            case 4: consultaImoveisGrandes(vetImoveis)
                break
            case 5: alert(`Programa sera encerrado`)
                break
            default: alert(`Opção invalida`)
        }
    }
    while(opcao != 5)
}

let cadastraImoveis = (vetImoveis) =>{
    let objeto ={
        codigo: Number(prompt(`Digite seu codigo`)),
        tamanho: Number(prompt(`Qual o tamanho da casa`)),
        tipo: Number(prompt(`Declaração de imovel digite A. para casa e B. apartamento`)). toUpperCase(),
        valor: Number(prompt(`Informe valor do imovel`))
    }
    let achou = false 
    for(let i =0;i<vetImoveis.length;i++){
        if(vetImoveis[i].codigo == objeto.codigo){
            achou = true 
            alert(`Código já existe`)
        }
    }
    if(!achou){
        vetImoveis.push(objeto)
    }
let consultaImoveis = (vetImoveis,tipo) => {
        console.log(vetImoveis)
        for(let i=0;i<vetImoveis.length;i++){
            if(vetImoveis[i].tipo == tipo){
                console.log(vetImoveis[i])
            }
        }
    }
    return
}
let consultaValorTotal = (vetImoveis) =>{
    let soma = 0
    for(let i=0;i<vetImoveis.length;i++){
        soma = soma + vetImoveis[i].valor

    }
    return
}
let consultaImoveisGrandes =  (vetImoveis) =>{
    for(let i=0;i<vetImoveis.length;i++){
        if (vetImoveis[i].tamanho > 100){
            console.log(vetImoveis[i])
        }
    }
}