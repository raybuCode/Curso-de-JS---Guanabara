var idade = 29
console.log(`Você tem ${idade} anos`)
if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    if (idade < 15) {
        console.log('Não vota')
    } else {
        console.log('Voto obrigatorio')
    }
} 