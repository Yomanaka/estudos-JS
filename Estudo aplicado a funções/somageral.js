const num = [1,2,3,4,5]

const soma = num.reduce((acumulador, atual)  =>{
    const total = acumulador + atual;

    return total;
})
console.log(soma)