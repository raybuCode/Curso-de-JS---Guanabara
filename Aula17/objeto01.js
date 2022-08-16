let amigo = {nome: 'Jose', 
    sexo: 'M', 
    peso: 85, 
    engordar(p){
        console.log("Engordou")
        this.peso =+ peso
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)