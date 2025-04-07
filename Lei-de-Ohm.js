// Função para validar a entrada, permitindo apenas números, vírgula e ponto
function validarEntrada(event) {
    var valor = event.target.value;
    var novoValor = valor.replace(/[^0-9,\.]/g, '');  // Permite números, vírgula e ponto
    if (novoValor !== valor) {
        event.target.value = novoValor;
    }
}

// Função para converter valores com vírgula ou ponto para um número decimal válido
function converterValor(valor) {
    return parseFloat(valor.replace(',', '.'));
}

// Função para calcular a Primeira Lei de Ohm
function calcularOhm() {
    var tensao = document.getElementById('tensao').value;
    var resistencia = document.getElementById('resistencia').value;
    var corrente = document.getElementById('corrente').value;
    var resultado = '';

    // Convertendo os valores com vírgula para ponto decimal
    tensao = converterValor(tensao);
    resistencia = converterValor(resistencia);
    corrente = converterValor(corrente);

    if (tensao && resistencia && !corrente) {
        corrente = tensao / resistencia;
        resultado = 'A corrente (I) é: ' + corrente.toFixed(2) + ' A';
    } else if (resistencia && corrente && !tensao) {
        tensao = corrente * resistencia;
        resultado = 'A tensão (V) é: ' + tensao.toFixed(2) + ' V';
    } else if (tensao && corrente && !resistencia) {
        resistencia = tensao / corrente;
        resultado = 'A resistência (R) é: ' + resistencia.toFixed(2) + ' Ω';
    } else {
        resultado = 'Por favor, preencha dois valores para calcular o terceiro.';
    }

    document.getElementById('resultado-lei').innerText = resultado;
}

// Função para calcular a resistência usando a fórmula R = ρ * l / A
function calcularResistencia() {
    var resistividade = document.getElementById('resistividade').value;
    var comprimento = document.getElementById('comprimento').value;
    var area = document.getElementById('area').value;
    var resistencia = document.getElementById('res').value;
    var resultado = '';

    // Convertendo os valores com vírgula para ponto decimal
    resistividade = converterValor(resistividade);
    comprimento = converterValor(comprimento);
    area = converterValor(area);
    resistencia = converterValor(resistencia);

    if (resistividade && comprimento && area && !resistencia) {
        // Calcular a resistência (R = ρ * l / A)
        resistencia = (resistividade * comprimento) / area;
        resultado = 'A resistência (R) é: ' + resistencia.toFixed(2) + ' Ω';
    } else if (comprimento && area && resistencia && !resistividade) {
        // Calcular a resistividade (ρ = R * A / l)
        resistividade = (resistencia * area) / comprimento;
        resultado = 'A resistividade (ρ) é: ' + resistividade.toFixed(2) + ' Ω·m';
    } else if (resistividade && area && resistencia && !comprimento) {
        // Calcular o comprimento (l = R * A / ρ)
        comprimento = (resistencia * area) / resistividade;
        resultado = 'O comprimento (l) é: ' + comprimento.toFixed(2) + ' m';
    } else if (resistividade && comprimento && resistencia && !area) {
        // Calcular a área (A = R * ρ / l)
        area = (resistencia * resistividade) / comprimento;
        resultado = 'A área transversal (A) é: ' + area.toFixed(2) + ' m²';
    } else {
        resultado = 'Por favor, preencha três valores para calcular o quarto.';
    }

    document.getElementById('resultado-resistencia').innerText = resultado;
}

// Interação com botões para alternar visibilidade dos tópicos
document.addEventListener('DOMContentLoaded', function() {
    const topicButtons = document.querySelectorAll('.topic-button');

    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.parentElement;
            // Alterna a classe 'active' para mostrar/esconder o conteúdo e girar a seta
            topic.classList.toggle('active');
        });
    });
});
