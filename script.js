// Obtenha os valores de usuário e senha do formulário
var usuario = document.getElementsByClassName("email").value;
var senha = document.getElementsByClassName("senha").value;

function autenticarUsuario() {
    // Realize a verificação de autenticação, substituindo esta lógica pelo seu próprio mecanismo de autenticação
    var autenticado = verificarAutenticacao(usuario, senha);

    if (autenticado) {
        // Se o usuário for autenticado com sucesso, redirecione para a página "home"
        window.location.href = "home.html";
    } else {
        // Se a autenticação falhar, exiba uma mensagem de erro na página
        document.getElementById("resultado").textContent = "Autenticação falhou. Tente novamente.";
    }

    // Impede o envio do formulário
    return false;
}

function verificarAutenticacao(usuario, senha) {
    // Substitua esta função pela sua lógica de autenticação real
    // Você pode verificar o usuário e a senha em um banco de dados ou em um serviço de autenticação
    // Neste exemplo, consideraremos a autenticação bem-sucedida se o usuário for "exemplo" e a senha for "senha123"
    return usuario === "exemplo@gmail.com" && senha === "senha123";
}