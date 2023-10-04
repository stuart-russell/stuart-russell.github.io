function setGreeting() {
    const greeting = document.querySelector("#greeting");

    var today = new Date().getHours();
    if (today < 12) {
        greeting.textContent = "Madiann Math"
    }
    if (today > 12 && today < 13) {
        greeting.textContent = "Feasgar Math"
    }
    if (today > 13 && today < 18) {
        greeting.textContent = "Latha Math"
    }
    greeting.textContent = "Oidhche Math"
}