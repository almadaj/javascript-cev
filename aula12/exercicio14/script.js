
function carregar() {

    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`

    if(hora >= 0 && hora < 12){

        imagem.src = "fmanha.png"
        document.body.style.background = '#283d1f'

    } else if (hora >= 12 && hora < 18){

        imagem.src = "ftarde.png"
        document.body.style.background = '#f2984e'

    } else{

        imagem.src = "fnoite.png"
        document.body.style.background = '#1a2963'

    }

}