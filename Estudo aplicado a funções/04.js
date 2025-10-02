const numbers = [-10, 0, 2, 4,];


/*const doublePositive = numbers.filter( n => n  > 0).map( n => n * 2);
console.log(doublePositive)*/

const doublePositive = numbers.reduce( (arrAcumulador, currentNumber) => {
    if(currentNumber > 0){
        arrAcumulador.push(currentNumber * 2)
    }
    return arrAcumulador;
}, [] )
console.log(doublePositive);