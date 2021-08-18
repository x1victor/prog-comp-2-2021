let questao1 = () =>{
    let Whatsapp = 0
    let email = 0
    let tf = 0
    let ava = 0
    let opcao
    do{
        opcao = Number(prompt(`informe uma opção`))
        switch(opcao){
            case 1: ava++
            break
            case 2: papel++
            break
            case 3: Whatsapp++
            break
            case 4: email++
            break
            case 5: tf++
            break
            default: alert(`opção invalida`)
        }
    }
    while(opcao != 0)

    console.log(`AVA - ${ava} Papel - ${papel} WhatsApp - ${Whatsapp} E-mail ${email} TF ${tf}`)

    console.log(`${(tf/(ava+papel+Whatsapp+email+tf)*100)}`)

    let troca
    for(let i=0;i<4;i++){
        if(ava > papel){
            troca = ava; ava = papel; papel = troca
        }
        if(papel > whatsapp){
            troca = papel; papel = whatsapp; whatsapp = troca
        }
        if(whatsapp > email){
            troca = whatsapp;whatsapp = email; email = troca 
        }
        if(email > tf){
            troca = email; email = tf; tf = troca
        }
    }
console.log(`${tf} ${email} ${whatsapp} ${papel} ${ava}`)
}