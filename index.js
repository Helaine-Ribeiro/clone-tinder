
    // Obter referências para os elementos de ícone
    const iconTimes = document.getElementById("icon-times");
    const iconStar = document.getElementById("icon-star");
    const iconHeart = document.getElementById("icon-heart");
    const likeCounter = document.getElementById("like-counter");

    let likeCount = 0;

    // Adicionar ouvintes de evento de clique para cada ícone
    iconTimes.addEventListener("click", function() {
        console.log("Ícone Heart clicado");
        if (likeCount > 0) {
            likeCount--;
            likeCounter.textContent = likeCount + " curtidas";
        }
    });

    iconStar.addEventListener("click", function() {
        console.log("Ícone Star clicado");
        // Aqui você pode adicionar a lógica que deseja executar quando o ícone Star for clicado
    });

    iconHeart.addEventListener("click", function() {
        console.log("Ícone Times clicado");
        likeCount++;
        likeCounter.textContent = likeCount + " curtidas";
    });

