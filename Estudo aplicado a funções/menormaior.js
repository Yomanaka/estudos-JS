//maior/menor em JS(testado em console node.js)
function pomba(n1=0,n2=0) {
    if(n1>n2){
        return `O número ${n1} é maior`;
    } else if(n2>n1){
        return `O número ${n} é maior`;
    } else{
        return `Os números ${n1} e ${n2} são iguais`;
    }
}
console.log(pomba(3,3));