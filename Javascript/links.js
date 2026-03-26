// Hämta sparade länkar från LocalStorage (eller tom lista)
let links = JSON.parse(localStorage.getItem("links") || "[]");
console.log("Sparade länkar:", links); // ← lägg till

function renderLinks() {
    const ul = document.getElementById("links-list");
    console.log("ul element:", ul); // ← lägg till
    ul.innerHTML = "";

    links.forEach((link, index) => {
        const domain = new URL(link.url).hostname;

        ul.innerHTML += `
            <li>
                <img src="https://www.google.com/s2/favicons?domain=${domain}&sz=32" alt="favicon"/>
                <a href="${link.url}" target="_blank">${link.label}</a>
                <button class="delete-btn" data-index="${index}">-</button>
            </li>
        `;
    });

    // Ta bort-knappar
    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            links.splice(btn.dataset.index, 1);
            localStorage.setItem("links", JSON.stringify(links));
            renderLinks();
        });
    });
}

// Lägg till länk-knappen
document.getElementById("add-link-btn").addEventListener("click", () => {
    let url = prompt("Ange URL (ex: https://google.com)");
    const label = prompt("Ange rubrik (ex: Google)");

    if (url && label) {
        // Lägg till https:// automatiskt om det saknas
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
        links.push({ url, label });
        localStorage.setItem("links", JSON.stringify(links));
        renderLinks();
    }
});

renderLinks();
