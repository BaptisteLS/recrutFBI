// This file contains the JavaScript logic for the quiz functionality.

document.addEventListener('DOMContentLoaded', function () {
    // Détecte la page courante
    const pageMatch = window.location.pathname.match(/question(\d+)\.html$/);
    if (!pageMatch) return; // Ne rien faire si ce n'est pas une page question

    const questionIndex = parseInt(pageMatch[1], 10) - 1;
    const answers = ["4263", "5172", "Lactalis", "Moi", "Julien", "Mozzarella", "Saucisse", "Menottes", "Surfeuse"];
    const hints = [
        ["Nombre à 4 chiffres.", "Photo mail."],
        ["Vidéo", "Abuses"],
        ["Commence par B finit par s", "ya un r, un e et un t"],
        ["Je t'aime pas", "Un peu en vrai"],
        ["Avec un couteau", "Image mail"],
        ["Youtubeur et météorologiste", "Description"],
        ["Youtube", "Profil"],
        ["Youtube", "Pantalone se décrit lui même"],
        ["FSI", "Visible en ce moment"]
    ];

    const validateBtn = document.getElementById('validate');
    const answerInput = document.getElementById('answer');
    const responseDiv = document.getElementById('response');
    const nextPageBtn = document.getElementById('nextPage');
    const hint1Btn = document.getElementById('hint1');
    const hint2Btn = document.getElementById('hint2');
    const revealAnswerBtn = document.getElementById('revealAnswer');

    validateBtn.addEventListener('click', function () {
        if (answerInput.value.trim() === answers[questionIndex]) {
            responseDiv.textContent = "Félicitations ! Bonne réponse.";
            nextPageBtn.style.display = "inline-block";
        } else {
            responseDiv.textContent = "Mauvaise réponse, essaie encore.";
        }
    });

    hint1Btn.addEventListener('click', function () {
        responseDiv.textContent = hints[questionIndex][0];
    });
    hint2Btn.addEventListener('click', function () {
        responseDiv.textContent = hints[questionIndex][1];
    });
    revealAnswerBtn.addEventListener('click', function () {
        responseDiv.textContent = "La réponse est : " + answers[questionIndex];
    });

    nextPageBtn.addEventListener('click', function () {
        if (questionIndex === 8) {
            window.location.href = "final.html";
        } else {
            window.location.href = `question${questionIndex + 2}.html`;
        }
    });
});