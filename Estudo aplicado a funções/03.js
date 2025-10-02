const pessoas = [
    {nome: 'Daniel', idade: 28},
    {nome: 'Maria', idade: 29},
    {nome: 'Marta', idade: 29}
]

const porIdade= pessoas.reduce((pessoasIdade,pessoasAtual)  => {
    /*if(pessoasIdade[pessoasAtual.idade]){
        pessoasIdade[pessoasAtual.idade].push(pessoasAtual.nome);
    }else {
        pessoasIdade[pessoasAtual.idade]=[];
        pessoasIdade[pessoasAtual.idade].push(pessoasAtual.nome);
    }------------------------OU-----------------------------------*/
    pessoasIdade[pessoasAtual.idade] = pessoasIdade[pessoasAtual.idade] || [] 
    pessoasIdade[pessoasAtual.idade].push(pessoasAtual.nome)
    return pessoasIdade;
}, {})

console.log(porIdade)