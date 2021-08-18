let shinobi = new object()
shinobi.aldeia = konoha;
shinobi.idade = 23;
shinobi.posto = hokage;
shinobi.cla = uchiha;

console.log(shinobi)

let shinobi = {
    aldeia: 'konoha',
    idade: 18,
    posto: hokage,
    cla: uzumaki
}
console.log(shinobi)

let shinobi = new object()
shinobi["aldeia"] = "koonoha"
shinobi["idade"] = 18
shinobi["posto"] = hokage
shinobi["cla"] = hyuga
//criando objeto com vetores

let vetor = []
for(let i = 0;i < 4;i++){
    //cria objeto
    let objeto = {
        nome: prompt(`Informe o nome do produto`),
        qtde: Number(prompt(`Informe qtde do produto`)),
        preco: Number(prompt(`Informe o preço do produto`))
    }
}
console.log(objeto)
let soma = 0
for(let i = 0;i < 4;i++){
    soma = soma + vetor[i].preco

}
console.log(`A media é ${soma}`)

