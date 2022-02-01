let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
var tabela = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, tabela)){        
        tabela.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado`         
        lista.appendChild(item)
    } else {
        window.alert("[ERRO]Já em lista!")
    } 
    num.value = ""
    num.focus() 
}


function finalizar(){
    if(tabela.length == 0){
        window.alert("Insira valores")
    }else{      
    let maior = tabela[0]
    let menor = tabela[0]
    let soma = 0    
    for(var i = 0; i < tabela.length; i++){        
        soma += tabela[i]        
        if(tabela[i] > maior){
            maior = tabela[i]
        }
        if(tabela[i] < maior){
            menor = tabela[i]
        }                    
    }
    

    let media = soma / tabela.length

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tabela.length} inseridos</p>`
    res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor número informado foi ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os números foi ${soma}<p>`
    res.innerHTML += `<p>A média entre todos foi de ${media}!</p>`
    }
}
