function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('saudacao')

    var data = new  Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sdc = 'texto'

    msg.innerHTML = `Obrigado pela visita agora São ${hora}  horas e ${min} minutos .`
    

    if(hora>= 0 && hora < 12 ){
        saudacao.innerHTML = `Bom dia!`
        document.body.style.background ='#e2d4b2'
        
    }else if(hora>=12 && hora<=18){
        saudacao.innerHTML = `Boa tarde!`
        document.body.style.background ='#b6bad3'
        
    }else{
        saudacao.innerHTML = `Boa noite!`
        document.body.style.background ='#3d7395'
        
    }
}

