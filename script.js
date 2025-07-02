const select = document.getElementById("sabores");
const imagem = document.getElementById("imagem-sabor");

select.addEventListener("change", function () {
    const sabor = this.value;

    if (sabor === "") {
        imagem.style.display = "none";
        return;
    }

    imagem.src = `imagens/${sabor}.png`;
    imagem.style.display = "block";

    if (sabor === "morango") {
        const audio = new Audio("morango.mp3");
        audio.play();
    }
});
