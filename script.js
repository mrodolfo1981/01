function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new  Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Obrigado pela visita agora São ${hora} horas.`
    
    if(hora>= 0 && hora < 12 ){
        document.body.style.background ='#e2d4b2'
    }else if(hora>=12 && hora<=18){
        document.body.style.background ='#b6bad3'
    }else{
        document.body.style.background ='#3d7395'
    }
}

