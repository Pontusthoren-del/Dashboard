async function randomBackground() {
    const response = await fetch(
        "https://api.unsplash.com/photos/random?client_id=3RJtQGGkiqPuCaWnoPK7tu4BZjXi-sqLTSjiSf2LRgA",
    );
    const data = await response.json();

    const img = new Image();
    img.src = data.urls.regular;

    img.onload = () => {
        const next = document.getElementById("background-next");
        const current = document.getElementById("background");

        next.style.backgroundImage = `url(${data.urls.regular})`;
        next.style.opacity = "1";

        setTimeout(() => {
            current.style.backgroundImage = `url(${data.urls.regular})`;
            next.style.opacity = "0";
        }, 800);
    };
}

document
    .getElementById("random-bkg-btn")
    .addEventListener("click", randomBackground);
