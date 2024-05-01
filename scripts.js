function saySorry100Times() {
    let sorryText = "";
    for (let i = 0; i < 100; i++) {
        sorryText += "Sorry naw....🤌🏻🤧<br>";
    }
    document.getElementById("sorryContainer").innerHTML = sorryText;
}