function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var a = window.document.getElementById('beta');
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        a.innerHTML = 'Bom dia!'
        img.src = 'manha1f.png';
        document.body.style.background = '#fea833';
    } else if (hora >= 12 && hora <= 18) {
        a.innerHTML = 'Boa tarde!'
        img.src = 'tarde1f.png';
        document.body.style.background = '#ce2505'
    } else {
        a.innerHTML = 'Boa noite!'
        img.src = 'noite1.png';
        document.body.style.background = '#11284a';
    }
}
