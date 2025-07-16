alert("Jogo do número secreto");
let dificuldade = 1000;
let numerosecreto = parseInt( Math.random()* dificuldade +1);
console.log(numerosecreto);
let chute;
let tentativas = 1;

while (chute != numerosecreto) {
  chute = prompt(`Escolha um número de 1 a  ${dificuldade}`);
  if (numerosecreto == chute) {
    break;

  } else {
    alert("Você errou!");
    tentativas++;
    if (chute > numerosecreto) { alert(`número secreto é menor que ${chute}`); }
    else {
      alert(`O número secreto é maior que ${chute}`);
      //Para atribuir mais 1: ++
    }
  }
}
let palavratentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
alert(`Você acertou ${numerosecreto} com ${tentativas} ${palavratentativa}`);