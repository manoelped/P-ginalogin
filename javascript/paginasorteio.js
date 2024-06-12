function sortear() {
    const min = parseInt(document.getElementById("minimo").value);
    const max = parseInt(document.getElementById("maximo").value);

    if (min >= max) {
        alert("O número mínimo deve ser menor que o número máximo.");
        return;
    }

    const sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("resultado").textContent = `Número sorteado: ${sorteio}`;
}