async function fetchNews() {
    const rssUrl = "https://www.svt.se/nyheter/lokalt/halland/rss.xml";
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    const ul = document.getElementById("local-news-list");
    ul.innerHTML = "<li>Loading news...</li>";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== "ok" || !data.items.length) {
            ul.innerHTML = "<li>Kunde inte hämta nyheter.</li>";
            return;
        }

        ul.innerHTML = "";

        data.items.slice(0, 3).forEach((article) => {
            ul.innerHTML += `
                <li>
                    <div class="news-info">
                        <a href="${article.link}" target="_blank"><strong>${article.title}</strong></a>
                        <div class="news-details">
                            <span class="news-source">SVT Halland</span>
                        </div>
                    </div>
                </li>
            `;
        });
    } catch (error) {
        ul.innerHTML = "<li>Något gick fel vid hämtning av nyheter.</li>";
        console.error("News fetch error:", error);
    }
}

fetchNews();