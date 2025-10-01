var ns = document.getElementById('txtn');
var tab = document.getElementById('selnum');
let res = document.querySelector('div#res');
let valores = [];
function inTab(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }

}

function add() {
    var n = Number(ns.value);
    if (ns.value.length == 0 || n < 1 || n > 100 || inTab(ns.value, valores)) {
        window.alert('Põe o número certo burro e sem repetir!');
    } else {
        var item = document.createElement('option');
        item.text = `Valor ${n} adicionado.`;
        valores.push(n);
        tab.appendChild(item);
        res.innerHTML ='';
    }
    ns.value = '';
    ns.focus();
}

function calc() {
    if (valores.length == 0) {
        window.alert('Finalizar oque louco, nem colocou nada');
    } else {
        let qtd = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let i in valores) {
            soma += valores[i];
            if (valores[i] > maior)
                maior = valores[i];
            if (valores[i] < menor)
                menor = valores[i];
        }
        media = soma/qtd;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${qtd} número(s) cadastrados.<\p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}<\p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}<\p>`;
        res.innerHTML += `<p>A soma de todos os valores é  ${soma}<\p>`;
        res.innerHTML += `<p>A méidia de todos os valores é ${media}<\p>`;
    }
}