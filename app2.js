alert ("Faça login para acessar o site");
let tentativasLogin = prompt("Nome de usuário");
let tentativasSenha = prompt("Senha");
let login = Danilo;
let senha = "1234";

if (tentativasLogin === login) {
    alert (`Acesso liberado, seja bem vindo, ${login}`);
} else{
  alert(`Acesso negado, o usuário ${tentativasLogin} não existe`);
}

if (tentativasSenha === senha ) {
    alert ("Acesso liberado, seja bem vindo");
} else{
  alert(`Acesso negado, o usuário ${tentativasLogin} não existe`);
}
