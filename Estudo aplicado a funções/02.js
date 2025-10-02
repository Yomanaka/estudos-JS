/*const itens = [
{ description: 'pen', quantity: 1, price: 3},
{ description: 'rule', quantity: 2, price: 5},
{ description: 'erase', quantity: 2, price: 6}
];

const total = itens.reduce( (soma,itemAtual) => {
    return soma + (itemAtual.quantity * itemAtual.price)
}, 0) 
console.log(total);*/

const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"];


const namesCount = names.reduce ( (count,nomeAtual)  => {
    const firstLetter = nomeAtual[0].toLocaleLowerCase();
    if(count[firstLetter]){
        count[firstLetter]++;
    } else {
        count[firstLetter] = 1;
    }
    return count;
}, {} ) 
console.log(namesCount)