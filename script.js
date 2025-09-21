function updateClock() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");
    var timeString = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    var clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}
setInterval(updateClock, 1000);
updateClock(); // spustí se hned po načtení
