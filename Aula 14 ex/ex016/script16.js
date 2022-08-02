function contar() {
  let ini = document.getElementById("numInicio");
  let fim = document.getElementById("numFim");
  let passo = document.getElementById("numPasso");
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `Impossivel contar`
    //window.alert('[ERRO]')
  } else {
    res.innerHTML = `Contando: </br>`
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
      window.alert('Passo invalido! Considerando passo 1')
      p = 1
    }

    if (i < f) {
      for (let cont = i; cont <= f; cont += p) {
        res.innerHTML += `${cont} \u{1F449}`
      }
      res.innerHTML += `\u{1f41d}`
    } else {
      for (let cont = i; cont >= f; cont -= p) {
        res.innerHTML += `${cont} \u{1f449}`
      }
      res.innerHTML += `\u{1f41d}`
    }


  }
}