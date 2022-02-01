var amigo = {nome: 'José',
sexo: 'M',
peso: 80,
engordar(p=0){
    console.log("Engordou")
    this.peso += p
}}

amigo.engordar(10)

console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)