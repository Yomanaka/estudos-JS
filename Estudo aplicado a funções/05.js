const usuarios = [
    {id: 1, nome: "Luciano", idade: 23, ativo: true},
    {id: 2, nome: "Danilo", idade: 41, ativo: false},
    {id: 3, nome: "Daenerys", idade: 45, ativo: true},
    {id: 4, nome: "Valentino", idade: 36, ativo: false},
    {id: 5, nome: "John Snow", idade: 18, ativo: true}
];

/*const ativos = usuarios.filter(users => users.ativo);
console.log("usuários ativos: ", ativos)*/

/*const nomes = usuarios.map(users => users.nome);
console.log("Nomes: ",nomes)*/

/*const ages = usuarios.reduce((total, id) => total + id.idade, 0);
console.log("Soma das idades: ",ages)*/

/*const moreOld = usuarios.reduce((acc,older) => {
    return (older.idade > acc.idade) ? older : acc;
})
console.log("A maior idade é: ",moreOld.idade);*/
usuarios.push ({id:6 , nome: "Tyrion Lanister", idade: 40, ativo: false});
console.log(usuarios);