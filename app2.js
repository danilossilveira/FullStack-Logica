alert ("Faça login para acessar o site");
let tentativasLogin = prompt("Nome de usuário");
let tentativasSenha = prompt("Senha");
let login = "Danilo";
let senha = "1234";

while ( tentativasLogin != login && tentativasSenha != senha){
tentativasLogin = prompt("Nome de usuário");
tentativasSenha = prompt("Senha");
if (tentativasLogin == login && tentativasSenha == senha ) {
  alert (`Acesso liberado, seja bem vindo, ${login}`);
} else {
  alert("Acesso negado, usuário ou senha incorreto");
}
}
