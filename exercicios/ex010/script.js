function verificar(){

    var user_ano = document.getElementById('txtano')
    var res = document.getElementById('res')

    var data = new Date()
    var ano = data.getFullYear()

    if(user_ano.value.length == 0 || Number(user_ano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var idade = ano - Number(user_ano.value)
        var user_sex = document.getElementsByName('radsex')
        var genero = ''

        if(user_sex[0].checked){
            genero = 'Homem'
        }else if(user_sex[1].checked){
            genero = 'Mulher'
        }

        res.innerHTML = `Verificamos ${genero} com ${idade} anos!` 
    }
}