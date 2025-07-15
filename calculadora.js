alert("Calculadora");
let escolha = prompt("Insira (A) para somar, (B) para subtrair, (C) para dividir, e (D) para multiplicar");
switch (escolha) {
    case "a": {
        let valor1 = prompt("Insira o número");
        let valor2 = prompt(`${valor1}+`);
        let resultado = (Number(valor1) + Number(valor2));
        if (alert(`O resultado é ${resultado}`));
    } break;
    case "b": {
        let valor1 = prompt("Insira o número");
        let valor2 = prompt(`${valor1}-`);
        let resultado = (Number(valor1) - Number(valor2));
        if (alert(`O resultado é ${resultado}`));
    }
        { } break;
    case "c": {
        let valor1 = prompt("Insira o número");
        let valor2 = prompt(`${valor1}/`);
        let resultado = (Number(valor1) / Number(valor2));
        if (alert(`O resultado é ${resultado}`));
    }
        { } break;
    case "d": {
        let valor1 = prompt("Insira o número");
        let valor2 = prompt(`${valor1}x`);
        let resultado = (Number(valor1) * Number(valor2));
        if (alert(`O resultado é ${resultado}`));
    }
    default: {
    } break;
}