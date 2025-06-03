document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("filtro-ministerio");
    const ministerios = document.querySelectorAll(".conteudo > div");

    input.addEventListener("input", function () {
        const termo = input.value.toLowerCase();

        ministerios.forEach(div => {
            const titulo = div.querySelector("h2").textContent.toLowerCase();
            if (titulo.includes(termo)) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        });
    });
});

