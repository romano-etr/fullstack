let numeroSecreto = Math.floor(Math.random() * 100);
let tentativas = 0;

const input = document.getElementById("palpite");
const botao = document.getElementById("btnVerificar");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const reiniciar = document.getElementById("reiniciar");

function verificarPalpite() {
    const valor = Number(input.value);

    if (input.value === "") {
        mensagem.textContent = "Digite um número!";
        mensagem.style.color = "orange";
        return;
    }

    if (valor < 0 || valor > 99) {
        mensagem.textContent = "Digite um número entre 0 e 99!";
        mensagem.style.color = "red";
        return;
    }

    tentativas++;
    contador.textContent = tentativas;

    if (valor === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto}!`;
        mensagem.style.color = "green";

        input.disabled = true;
        botao.disabled = true;

        reiniciar.style.display = "inline-block";
    } 
    else if (valor < numeroSecreto) {
        mensagem.textContent = "🔼 O número secreto é MAIOR!";
        mensagem.style.color = "#0077ff";
    } 
    else {
        mensagem.textContent = "🔽 O número secreto é MENOR!";
        mensagem.style.color = "#0077ff";
    }

    input.value = "";
    input.focus();
}

botao.addEventListener("click", verificarPalpite);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        verificarPalpite();
    }
});

reiniciar.addEventListener("click", () => {
    numeroSecreto = Math.floor(Math.random() * 100);
    tentativas = 0;

    contador.textContent = tentativas;

    mensagem.textContent = "Novo jogo iniciado! 🍀";
    mensagem.style.color = "#333";

    input.disabled = false;
    botao.disabled = false;

    input.value = "";
    input.focus();

    reiniciar.style.display = "none";
});