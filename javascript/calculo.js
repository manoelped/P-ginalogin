function calcular(){
    var num = Number(window.prompt('Digite um número:'));
    var resultado = document.querySelector('section#resultado');
    var dobro = num * 2;
    var metade = num / 2;

    resultado.innerHTML = `<p>O dobro de ${num} é : ${dobro} e a metade é: ${metade} &#9997!;</p>`
}