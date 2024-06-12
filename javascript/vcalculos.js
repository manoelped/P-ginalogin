function calcular(){
    var num =Number(window.prompt('Digite um número:'));
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p>O número a ser analisado será <strong>${num}</strong></p>`
    resultado.innerHTML += `<p>O seu valor absoluto é${Math.abs(num)}</p>`;
    resultado.innerHTML += `<p>A sua parte inteira é ${Math.trunc(num)}</p>`;
    resultado.innerHTML += `<p>O valor inteiro mais próximo é${Math.round(num)}</p>`;
    resultado.innerHTML += `<p>A raiz quadrada é ${Math.sqrt(num)}</p>`;
    resultado.innerHTML += `<p>A sua raiz cubica é ${Math.cbrt(num)}</p>`;
    resultado.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}</p>`;
    resultado.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}</p>`;
}
// resultado.innerHTML += `<p>${Math.}</p>`;