function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value == 0 || fano.value > ano){

        window.alert("[ERRO] Dados inválidos!")

    }else{

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute("id","foto")

        var gen = ''
        
        if(fsex[0].checked){

            gen = "homem"

            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'crianca-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }

        }else{

            gen = "mulher"

            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'crianca-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos que é ${gen} de ${idade} anos`
        
        res.appendChild(img)
    }
}