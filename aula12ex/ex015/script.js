function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        res.innerHTML = `Idade Calculada: ${idade}`;
        var gen = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gen = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'babyboy.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'adulto.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adultmen.png');
            } else {
                img.setAttribute('src', 'veiao.png');
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mini.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'muie.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'muieveia.png');
            } else {
                img.setAttribute('src', 'veia.png');
            }
        }
        res.innerHTML = `Detectamos ${gen} com idade ${idade} anos.`;
        res.appendChild(img);
    }
}