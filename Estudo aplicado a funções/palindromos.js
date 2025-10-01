function pal(palavra){
    let normal = palavra.toLowerCase();
    let invertido = normal.split("").reverse().join("");
    return normal === invertido;
}
console.log(pal('subinoonibus'));