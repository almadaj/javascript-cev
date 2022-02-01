function contar(){
    let numero = document.getElementById('txtn')
    let res = document.getElementById('seltab')

        res.innerHTML = 'Contando: <br>'        
        let n = Number(numero.value)

        res.innerHTML = ''
        
        for(var c = 1; c <= 10; c ++){
        
        soma = n * c
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `res${c}`//possibilidade de selecionar o item e passar valor, nesse código não tem funcionalidade
        res.appendChild(item)   
    }
}
