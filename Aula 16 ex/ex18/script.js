let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
res = document.querySelector('div#res')
let numeros = []
//ok
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
//ok
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
//ok
function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, numeros)) {
        //window.alert('Tudo ok')

        // Adicionar os numeros na lista
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
    num.value = '' //limpa o campo onde insere o numero
    num.focus() // é como se clicasse o mouse no campo de inserir numero para fazer o cursor piscar
}

/** ---------------- Funções de Verificação e Calculo ---------------- */

// A média dos numeros digitados é 5
// **CASO INSIRA UM NOVO VALOR LIMPAR RESULTADOS ACIMA

function finalizar() {
    // Somando todos os numeros, temos X
    if (numeros.length == 0) {
        window.alert('Insira um valor para continuar')
    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        // Informar o menor valor cadastrado
        // Informar o maior valor cadastrado
        for (let pos in numeros) {
            soma += numeros[pos]
            media += numeros[pos] / numeros.length
            if (numeros[pos]> maior) {
                maior = numeros[pos]
            } if (numeros[pos]<menor) {
                menor = numeros[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, existem ${total} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior numero é ${maior}</p>`
        res.innerHTML += `<p>O menor numero é ${menor}</p>`
        res.innerHTML += `<p>A soma dos numeros é ${soma}</p>`
        res.innerHTML += `<p>A média dos numeros é ${media}</p>`
    }


}