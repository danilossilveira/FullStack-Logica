alert ("Jogo do número secreto");
let numerosecreto = 6;
console.log (numerosecreto);
let chute ;
let tentativas=1 ;
while (chute != numerosecreto)
  {
   chute =prompt ("Insira o número secreto");
if (numerosecreto == chute) {
  alert (`Você acertou ${numerosecreto} com ${tentativas} tentativas`);
} else {alert ("Você errou!");
  if (chute > numerosecreto)
  {alert (`número secreto é menor que ${chute}`);}
else { 
alert (`O número secreto é maior que ${chute}`);
//Para atribuir mais 1: ++
tentativas ++;
}

}

}


