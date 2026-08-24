// =========================
// PROCTECTUHQ AI
// =========================

// Récupère la question et ouvre la page de chat
function startChat() {
    const input = document.getElementById("question");

    if (!input) return;

    const question = input.value.trim();

    if (question === "") {
        input.focus();
        return;
    }

    // Sauvegarde la question pour la page chat
    localStorage.setItem("firstQuestion", question);

    // Ouvre la page de conversation
    window.location.href = "pages/chat.html";
}


// =========================
// QUESTIONS RAPIDES
// =========================

function ask(question) {
    localStorage.setItem("firstQuestion", question);

    window.location.href = "pages/chat.html";
}


// =========================
// TOUCHE ENTRÉE
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("question");

    if (!input) return;

    input.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            event.preventDefault();

            startChat();
        }

    });

});


// =========================
// ANIMATION DE CHARGEMENT
// =========================

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});
