function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var hora = new Date()
    var agora = hora.getHours()

    // agora = 7
    // agora = 14
    // agora = 22

    msg.innerHTML = `Agora são ${agora} horas.`

    if(agora >= 6 && agora < 12){

        img.src = 'imagens/img-manha.png'
        document.body.style.backgroundColor = '#e2cd9f'

    }else if(agora >= 12 && agora <= 18){

        img.src = 'imagens/img-tarde.png'
        document.body.style.backgroundColor = '#b9846f'

    }else{

        img.src = 'imagens/img-noite.png'
        document.body.style.backgroundColor = '#515154'

    }
}