const notesArea = document.getElementById("notes-area");

notesArea.value = localStorage.getItem("notes") || "";

notesArea.addEventListener("input", () => {
    localStorage.setItem("notes", notesArea.value);
});
