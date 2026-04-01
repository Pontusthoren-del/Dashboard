const titleEl = document.getElementById("dashboard-title");

const savedTitle = localStorage.getItem("dashboardTitle");
if (savedTitle) titleEl.textContent = savedTitle;

titleEl.contentEditable = "true";

titleEl.addEventListener("blur", () => {
    const newTitle = titleEl.textContent.trim();
    if (newTitle !== "") {
        localStorage.setItem("dashboardTitle", newTitle);
    } else {
        titleEl.textContent = savedTitle || "Dashboard";
    }
});