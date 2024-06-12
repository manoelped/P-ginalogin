function cal_idade(){
    let agora = new Date
    let ano = agora.getFullYear()

    let nasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - nasc

    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <mark><strong>${idade}</strong></mark> anos em 2024</p>`
}