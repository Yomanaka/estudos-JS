/*const multiplo = (n) => n % 3 === 0 ? 'é multiplo de 3' :"não é multiplo de 3"

console.log(multiplo(9)) metodo arrow function*/

function multiplo(n){
    if(n%3===0){
        return `o número ${n} é multiplo de 3`
    }else{
        return `o número ${n} não é multiplo de 3`
    }
}
multiplo();
console.log(multiplo(12))
