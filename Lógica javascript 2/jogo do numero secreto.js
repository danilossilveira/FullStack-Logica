let listaNumerosSorteados=[];
let quantidadelimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}
function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", `Escolha um número entre 1 e ${quantidadelimite}`);
}
mensagemInicial();
function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
       let palavraTentativa = tentativas >1? "Tentativas" : "Tentativa";
        let mensagemTentativas =`Você acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("h1", mensagemTentativas);
        exibirTextoNaTela("p","Parabéns");
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
         exibirTextoNaTela ( "h1","Você errou");
         if (chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor");
         } else{
            exibirTextoNaTela ("p", "O número secreto é maior");
         }
         tentativas=tentativas+1;
         limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroescolhido = parseInt(Math.random() * quantidadelimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == quantidadelimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroescolhido)){
      return  gerarNumeroAleatorio();
    }else{ 
        listaNumerosSorteados.push(numeroescolhido);
        return numeroescolhido;
    }
    
}


function limparCampo() {
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();  
  tentativas = 1;
  limparCampo();
  mensagemInicial();
console.log (`${numeroSecreto}`);
document.getElementById("reiniciar").setAttribute("disabled", false);
}
console.log (`${numeroSecreto}`);
