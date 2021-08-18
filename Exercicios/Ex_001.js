let registraRedesSociais = () =>{
    //cadastro das redes sociais 
    let socialMidia = []
    for(let i=0;i<5;i++){
        let redeSocial = {
            codigo: Number(prompt(`Digite o código `)),
            nome:prompt(`Digite o nome da rede social`),
            link: prompt(`Digite o link`)
        }
        // inserir objeto no vetor
        socialMidia.push(redeSocial)
    }
    // Cadastro dos usuarios
    let user = []
    for(let i=0;i<5;i++){
        let usuario = {
            login: prompt(`Digite o login`),
            nome: prompt(`digite seu nome`),
            CodRede: Number(prompt(`Digite o codigo da rede social`)),
            qtdpost: Number(prompt(`Digite a quantidade de post`))
        }
        // só faremos isso se a rede social existir 
        let achou = false // asumo que não encontrei a rede social
        let j = 0 // indice do vetor rede social.
        while(!achou && j < 5){
            if (socialmidias[j].codigo == usuario.CodRede){
                achou = true
                alert(`Usuario inserido com exito`)
            }
            j++ //prepara para ir ao próximo elemento
        }
        if (!achou){
            alert(`usuário não inserido, pois a rede social não foi encontrada`)
        }
        
        // exercicio 1 ->
        
    // Exe1) o usuário informa a rede social, e o programa retorna quantos posts foram feitos
    let codigo = Number(prompt(`Informe o código da rede social`))
    let conta = 0
    for(let i=0;i<5;i++){
        if(user[i].CodRede == codigo){
            conta = conta + user[i].qtdpost
        }
        if(conta == 0){
            console.log(`Não houve postagem ou rede social não existe`)

        }
        else{
            console.log(`A quantidade de post feitas pelo usuario ${codigo} foi ${conta}`)
        }
    } 
  }
}

// Exe2) o programa retorna quantos posts foram feitos em todas as redes sociais
// Exe3) o usuário  informa o login do usuário, e o programa retorna quantos posts ele fez
// Exe4) o programa retorna quantos posts foram feitos por cada usuário
