let nome = prompt ('Qual é seu nome?');
let idade =  prompt ('Qual é a sua idade?');
let linguagem = prompt ('Qual linguagem você esta aprendendo?');

alert (`Olá ${nome} você tem ${idade} anos e já esta aprendendo ${linguagem}`);

let uLike = prompt (`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (uLike == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso.')}
else {
    alert ('Ahh que pena... Já tentou aprender outras linguagens?')
}