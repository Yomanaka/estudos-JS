function gerar() {
    var n1 = document.getElementById('txtn');
    var tab = document.getElementById('seltab');
    if (n1.value.length == 0) {
        window.alert('Coloca número pra funcionar seu burro!');
    } else {
        var n = Number(n1.value);
        var i=1;
        tab.innerHTML = '';
        for(i=1;i<=10;i++ ){
            var item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            tab.appendChild(item);
        }
    }

}