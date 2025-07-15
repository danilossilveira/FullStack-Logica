alert("Jogo do número secreto");
let numerosecreto = parseInt( Math.random()*100);
console.log(numerosecreto);
let chute;
let tentativas = 1;
while (chute != numerosecreto) {
  chute = prompt("Escolha um número de 1 a 100");
  if (numerosecreto == chute) {
    break;

  } else {
    alert("Você errou!");
    if (chute > numerosecreto) { alert(`número secreto é menor que ${chute}`); }
    else {
      alert(`O número secreto é maior que ${chute}`);
      //Para atribuir mais 1: ++
      tentativas++;
    }
  }
}
let palavratentativa = tentativas > 1 ? "tentativas" : "Tentativa";
alert(`Você acertou ${numerosecreto} com ${tentativas} ${palavratentativa}`);