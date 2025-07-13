const icones = document.querySelectorAll(".icon");

icones.forEach(function (icone) {
  icone.addEventListener("click", function () {
    const resposta = icone.parentElement.parentElement.querySelector(".resposta");
    resposta.classList.toggle("ativa");


    if (resposta.classList.contains("ativa")) {
      icone.src = "minus.png";
      icone.alt = "fechar resposta";
    } else {
      icone.src = "plus.png";
      icone.alt = "abrir resposta";
    } 
  });
});
