function calcularAcrescimo() {
    const salario = parseFloat(document.getElementById('salario').value);
    const nivel = parseFloat(document.getElementById('nivel').value);
    const acrescimo = salario * (nivel / 100);
    document.getElementById('resultado-acrescimo').innerText = `Acréscimo Salarial: R$ ${acrescimo.toFixed(2)}`;
}

function verificarInsalubridade() {
    const nivelRuido1 = parseFloat(document.getElementById('nivel-ruido1').value);
    const tempoExposicao1 = parseFloat(document.getElementById('tempo-exposicao1').value);
    const nivelRuido2 = parseFloat(document.getElementById('nivel-ruido2').value) || 0; // Default to 0 if empty
    const tempoExposicao2 = parseFloat(document.getElementById('tempo-exposicao2').value) || 0; // Default to 0 if empty

    function obterTempoMaximoPermitido(nivelRuido) {
        if (nivelRuido <= 85) return 8;
        if (nivelRuido <= 86) return 7;
        if (nivelRuido <= 87) return 6;
        if (nivelRuido <= 88) return 5;
        if (nivelRuido <= 89) return 4.5;
        if (nivelRuido <= 90) return 4;
        if (nivelRuido <= 91) return 3.5;
        if (nivelRuido <= 92) return 3;
        if (nivelRuido <= 93) return 2.67;
        if (nivelRuido <= 94) return 2.25;
        if (nivelRuido <= 95) return 2;
        if (nivelRuido <= 96) return 1.75;
        if (nivelRuido <= 97) return 1.5;
        if (nivelRuido <= 98) return 1.25;
        if (nivelRuido <= 99) return 1;
        if (nivelRuido <= 100) return 0.75;
        if (nivelRuido <= 101) return 0.67;
        if (nivelRuido <= 102) return 0.58;
        if (nivelRuido <= 103) return 0.50;
        if (nivelRuido <= 104) return 0.42;
        if (nivelRuido <= 105) return 0.33;
        if (nivelRuido <= 106) return 0.25;
        if (nivelRuido <= 107) return 0.20;
        if (nivelRuido <= 108) return 0.17;
        if (nivelRuido <= 109) return 0.14;
        if (nivelRuido <= 110) return 0.13;
        return 0; // Exposição não permitida
    }

    const tempoMaximoPermitido1 = obterTempoMaximoPermitido(nivelRuido1);
    const tempoMaximoPermitido2 = nivelRuido2 > 0 ? obterTempoMaximoPermitido(nivelRuido2) : 0; // Zero if não preenchido

    const proporcao1 = tempoExposicao1 / tempoMaximoPermitido1;
    const proporcao2 = tempoMaximoPermitido2 > 0 ? tempoExposicao2 / tempoMaximoPermitido2 : 0; // Zero se não aplicável

    const totalProporcao = proporcao1 + proporcao2;
    const insalubridade = totalProporcao > 1 ? "Atividade Insalubre" : "Atividade Não Insalubre";

    document.getElementById('resultado-ruido').innerText = `Proporção Total: ${totalProporcao.toFixed(2)}\nSituação: ${insalubridade}`;
}

function calcularPotencia() {
    const tensao = parseFloat(document.getElementById('tensao').value);
    const corrente = parseFloat(document.getElementById('corrente').value);
    const potencia = tensao * corrente;
    document.getElementById('resultado-potencia').innerText = `Potência: ${potencia.toFixed(2)} W`;
}

function calcularTensao() {
    const potencia = parseFloat(document.getElementById('potencia-tensao').value);
    const corrente = parseFloat(document.getElementById('corrente-tensao').value);
    const tensao = potencia / corrente;
    document.getElementById('resultado-tensao').innerText = `Tensão: ${tensao.toFixed(2)} V`;
}

function calcularCorrente() {
    const potencia = parseFloat(document.getElementById('potencia-corrente').value);
    const tensao = parseFloat(document.getElementById('tensao-corrente').value);
    const corrente = potencia / tensao;
    document.getElementById('resultado-corrente').innerText = `Corrente: ${corrente.toFixed(2)} A`;
}
