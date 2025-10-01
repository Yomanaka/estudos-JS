function vogais(texto, Vg = "aeiou"){
    let aux = 0;
    let palavra = texto.toLowerCase();
    
    for(let frase of palavra){
        if(Vg.includes(frase)){
            aux++;
        }
    }
    return aux;
}
console.log(vogais(""));
