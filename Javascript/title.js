const titleEl = document.getElementById("dashboard-title");

const savedTitle = localStorage.getItem("dashboardTitle");
if (savedTitle) titleEl.textContent = savedTitle;

titleEl.addEventListener("click", () => {
    const input = prompt("Ange ny titel:", titleEl.textContent);
    if (input !== null && input.trim() !== "") {
        titleEl.textContent = input.trim();
        localStorage.setItem("dashboardTitle", input.trim());
    }
});