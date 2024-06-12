var contador = 0;
let resultado = document.querySelector('section#resultado');
//Variaveis globais e funcionam dentro do programa inteiro    

function contar(){
    contador ++;
    resultado.innerHTML = `<p>o contador esta com <mark>${contador}</mark> cliques</p>`
}
function zerar(){
    contador = 0;
    resultado.innerHTML = null;
}