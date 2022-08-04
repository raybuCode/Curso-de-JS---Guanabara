let valores = [1, 2, 5, 8, 2]
valores.sort()
valores.push(1)
console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro numero do vetor é ${valores[0]}`)

let pos = valores.indexOf(3)

if (pos == -1) {
    console.log('o valor nao foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
//console.log(valores)

//FOR : percurso para exibição de vetores de forma TRADICIONAL
/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`posição ${pos} e valor ${valores[pos]}`    )
}*/

//novo FOR
for (let pos in valores) {
    console.log(`posição ${pos} tem o valor ${valores[pos]}`)
}
