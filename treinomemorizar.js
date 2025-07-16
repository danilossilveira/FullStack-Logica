alert("Este é um site multifunções");
let funções = prompt("O que você quer usar? calculadora, cronometro ou jogar ");
switch (funções) {
    case "calculadora": {
        let conta = prompt("Insira (A) para somar, (B) para subtrair, (C) para dividir, e (D) para multiplicar");
        
        switch (conta) {

            case "a": {
                valor1 = prompt("Insira o número");
                valor2 = prompt(`+ ${valor1}`);
                let resultado = (Number(valor1) + Number(valor2));
                alert(`O resultado é: ${resultado} `);
        } break;
        
            case "b": {
        valor1 = prompt("Insira o número");
        valor2 = prompt(`- ${valor1}`);
        let resultado = (Number(valor1) - Number(valor2));
        alert(`O resultado é: ${resultado} `);
    } break;
}

}
}