// script.js
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Aqui você pode adicionar lógica para verificar as credenciais
    console.log('Usuário:', username);
    console.log('Senha:', password)
})