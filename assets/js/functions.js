function setGreeting() {
    const greeting = document.querySelector("#greeting");

    var today = new Date().getHours();
    if (today < 12) {
        greeting.textContent = "Madiann Mhath"
    } else if (today > 12 && today < 13) {
        greeting.textContent = "Feasgar Math"
    } else if (today > 13 && today < 18) {
        greeting.textContent = "Latha Math"
    } else {
        greeting.textContent = "Oidhche Mhath"
    }
}