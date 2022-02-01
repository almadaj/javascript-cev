function verificar(n){
    
    if(n % 2 == 0){

        return 'par'

    }else{
        return 'ímpar'
    }
} 

console.log(verificar(5))

function somar(n, p){

    return n + p

}

console.log(somar(3, 2))

function fatorial(n){
    
    var res = 1

    for(var i = n; i > 1; i--){

        res *= i
    }
    return res
}
console.log(fatorial(5))