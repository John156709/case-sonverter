function toUpperCase() {
    let text = document.getElementById("textInput").value;
    document.getElementById("textInput").value = text.toUpperCase();
}

function toLowerCase() {
    let text = document.getElementById("textInput").value;
    document.getElementById("textInput").value = text.toLowerCase();
}

function toTitleCase() {
    let text = document.getElementById("textInput").value.toLowerCase();
    document.getElementById("textInput").value = text.replace(/\b\w/g, char => char.toUpperCase());
}

function toSentenceCase() {
    let text = document.getElementById("textInput").value.toLowerCase();
    document.getElementById("textInput").value = text.charAt(0).toUpperCase() + text.slice(1);
}
