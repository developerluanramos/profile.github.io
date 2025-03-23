// 🎥 Começar o vídeo a partir de 20 segundos
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bg-video");

    video.addEventListener("loadedmetadata", function () {
        video.currentTime = 13; // Inicia a partir de 20 segundos
    });
});

// ⌨️ Efeito de digitação
const frase = "Transformamos Ideias em Software de Alto Impacto";
const subfrase = "Soluções inovadoras para o seu negócio.";
const elemento = document.getElementById("typing-effect");
const subElemento = document.getElementById("subtyping-effect");
let index = 0;
let subIndex = 0;

function digitar() {
    if (index < frase.length) {
        elemento.innerHTML += frase.charAt(index);
        index++;
        setTimeout(digitar, 100); // Velocidade da digitação
    } else {
        elemento.style.borderRight = "none"; // Remove o cursor piscando no final
    }
}

function digitarSubfrase() {
    if (subIndex < subfrase.length) {
        subElemento.innerHTML += subfrase.charAt(subIndex);
        subIndex++;
        setTimeout(digitarSubfrase, 100);
    } else {
        subElemento.style.borderRight = "none"; // Remove o cursor piscante
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(digitar, 1000); // Começa após 1s
    setTimeout(digitarSubfrase, 3000); // Começa após 1s
});
