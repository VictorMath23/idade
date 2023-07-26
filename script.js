var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var forms = document.getElementById('forms')
    var voltar = document.getElementById('voltar')
    var foto = document.getElementById('fotox')

function verificar() {

    

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique o ano e tente novamente')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var generoElement = document.getElementById('genero')
        var idadeElement = document.getElementById('idade')
        var txt = document.getElementById('txt')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                foto.src = 'imagens/bebem.jpg'
            } else if (idade >= 10 && idade < 23) {
                //jovem
                foto.src = 'imagens/menino.jpg'
            } else if (idade >= 23 && idade < 50) {
                //adulto
                foto.src = 'imagens/homem.jpg'
            } else {
                //idoso
                foto.src = 'imagens/idoso.jpg'
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                foto.src = 'imagens/bebef.jpg'
            } else if (idade >= 10 && idade < 21) {
                //jovem
                foto.src = 'imagens/menina.jpg'
            } else if (idade >= 21 && idade < 50) {
                //adulto
                foto.src = 'imagens/mulher.jpg'
            } else {
                //idoso
                foto.src = 'imagens/idosa.jpg'
            }
        }

        voltar.style.display = 'block'
        forms.style.display = 'none'
        res.style.display = 'block'
        txt.style.display = 'block'
        txt.style.textAlign = 'center'
        foto.style.display = 'block'
        generoElement.textContent = genero
        idadeElement.textContent = idade

    }
}

function retornar() {
    forms.style.display = 'block'
    foto.style.display = 'none'
    res.style.display = 'none'
    txt.style.display = 'none'
    voltar.style.display = 'none'

}
