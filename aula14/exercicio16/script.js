function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0|| fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Dados incompletos!")
    }else{
        res.innerHTML = 'Contando: '        
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<=0){
            window.alert("Agora o teu intervalo é 1")
            p = 1
        }

        if(i<f){

        for(var c = i;c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F44D}`
        }
        
        res.innerHTML += `\u{1F3C1}\n`
        } else{

            for(var c = i;c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F44D}`
                }
                
                res.innerHTML += `\u{1F3C1}`

        }
    }                  
}
