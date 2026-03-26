function updateClock() {
    const now = new Date();

    document.getElementById("clock-time").textContent = new Intl.DateTimeFormat(
        "sv-SE",
        { hour: "2-digit", minute: "2-digit" },
    ).format(now);

    document.getElementById("clock-date").textContent = new Intl.DateTimeFormat(
        "en-US",
        { weekday: "long", day: "numeric", month: "long", year: "numeric" },
    ).format(now);
}

updateClock();
setInterval(updateClock, 1000);
