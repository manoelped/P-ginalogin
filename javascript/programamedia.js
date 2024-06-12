function calcular(){
    let nome = window.prompt('qual é o nome do aluno?')
    var b1 = Number(window.prompt('Digite a nota do primeiro bimestre:'))
    var b2 = Number(window.prompt('Digite a nota do segundo bimestre:'))
    var b3 = Number(window.prompt('Digite a nota do terceiro bimestre:'))
    var b4 = Number(window.prompt('Digite a nota do quarto bimestre:'))
    var media = (b1+b2+b3+b4) /4;

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Calculando a média final do aluno <strong>${nome}</strong></p>`;
    resultado.innerHTML += `<p>A média de ${nome} foi: <mark>${media}</mark></p>`;

if(media >=7){
    resultado.innerHTML += `O aluno(a) foi <strong>APROVADO!&#127891</strong>`
}else{
    resultado.innerHTML += `O aluno(a) foi <strong>REPROVADO!&#128531</strong>`
   
     }
}
