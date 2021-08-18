let registraRedesSociais = () =>{
    //cadastro das redes sociais 
    let socialMidia = []
    for(let i=0;i<5;i++){
        let redeSocial = {
            codigo: Number(prompt(`Digite o código `)),
            nome:prompt(`Digite o nome da rede social`),
            link: prompt(`Digite o link`)
        }
    }
    // inserir objetos no vetor
    socialMidia.push(redeSocial)
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
        user.push(usuario)
        // exercicio 1 ->
        let postPorRede
        for(let i=0;i<5;i++){
            postPorRede = usuario.qtdpost

        }

    }
// Exe1) o usuário informa a rede social, e o programa retorna quantos posts foram feitos
// Exe2) o programa retorna quantos posts foram feitos em todas as redes sociais
// Exe3) o usuário  informa o login do usuário, e o programa retorna quantos posts ele fez
// Exe4) o programa retorna quantos posts foram feitos por cada usuário
}
