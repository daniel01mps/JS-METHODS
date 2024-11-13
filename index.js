let alunos = ['Hideki', 'Frank', 'Camila', 'Joel', 'Daniel', 'Maeva'];

document.write(`<h1>Alunos: ${alunos}</h1>`);
document.write(`<h1>Qtd de alunos: ${alunos.length}</h1>`);

// utilizando map com função externa
function bemVindo(nome){
    document.write(`<h1>Bem vindo(a): ${nome}</h1>`);
}
alunos.map(bemVindo);

// alunos.map((aluno)) => {
//  document.write(`<h1>Bem vindo(a): ${nome}</h1>`);
// })

// utilizando arrow function com retorno de uma linha
document.write(`<h1>letras de cada nome: ${alunos.map(aluno => aluno.length)}</h1>`);
// utilizando arrow function com retorno de multiplas linhas
document.write(`<h1>Em que volta aparece a Camila:<br> ${
    alunos.map((aluno, posicao) => {
        if(aluno == 'Camila'){
            return `${aluno} está na posição: ${posicao}<br>`
        }
        return `${aluno}<br>`;
    })
}</h1>`);
// utilizando arrow function com seus tres parametros
document.write(`<h1>Posições dos alunos:<br>${
    alunos.map((aluno, posicao, array) => {
        return `${aluno} está na posição: ${posicao}/${array.length}<br>`
    })
}<h1>`);

document.write(`<h1>Um nome com 6 letras: ${
    alunos.find(aluno => aluno.length == 6)
}</h1>`);

document.write(`<h1>Todos os nomes com 6 letras: ${
    alunos.filter(aluno => aluno.length == 6)
}</h1>`);

document.write(`<h1>Exite algúem chamada Maeva? <br> ${
    alunos.includes('Maeva') ? 'sim' : 'Não'
}</h1>`);

let numeros = [3,2,6,4,5,1,10,25,37,12,24,7];

document.write(`<h1> A soma dos valores do array Numeros é ${
    numeros.reduce((total, numero) => total + numero, 0)
}</h1>`);

document.write(`<h1>Ordenando o array numeros: ${numeros.sort((a, b))}</h1>`);



// document.write(`<h1></h1>`);
// document.write(`<h1></h1>`);
// document.write(`<h1></h1>`);
// document.write(`<h1></h1>`);
// document.write(`<h1></h1>`);

