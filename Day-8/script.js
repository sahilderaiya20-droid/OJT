// =========================
// FILE: script.js
// =========================

// SEARCH FUNCTION

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {

        let title =
            card.querySelector("h3")
            .innerText.toLowerCase();

        if (title.includes(filter)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// SIMPLE ALERT BUTTONS

let buttons = document.querySelectorAll(".tool-card button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        alert("AI Tool Page Coming Soon!");

    });

});