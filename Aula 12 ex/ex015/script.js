function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//pega o ano completo exemplo: 2022
    var fano = document.getElementById('ano')
    var res= document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO 001: Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade < 10){ //HOMEM
                //criança
                img.setAttribute('src', 'imagens/bebeM.png')
            } else if(idade < 21 ){
                //jovem
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultoM.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if(fsex[1].checked){ //MULHER
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebeF.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemF.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultoF.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }
}