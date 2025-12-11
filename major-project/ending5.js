const messages = [
    "“I'm sorry, I don't think this is going to work.”",
    "“What? What do you mean?”",
    "Marie rummages through her purse and throws down a ten dollar bill.",
    "“I don't think we're compatable, and I'd rather end this date here.”",
    "“Awe, come on. I was just trying to be helpful!”",
    "Marie gets up and leaves the table, only stopping by the host stand before leaving to apologise for walking out so suddenly.",
    "“Fine! Be like that! I knew agreeing to this blind date would be a terrible idea!”",
    "You're left in the restaraunt alone.",
    "To make things worse, you yelled at her loud enough that people begin to compalin and stare.",
    "You are asked to pay for your drink and leave.",
    "Pretty shitty date, right?",
    "I was referring to you.",
    "Secret Ending : Immediately, no",
];

const images = [
    "Upset-talking-2.png",
    "Upset-2.png",
    "Mad-2.png",
    "Mad-talking-2.png",
    "Mad-2.png",
    "Ending-5.png",
    "Ending-5.png",
    "Ending-5.png",
    "Ending-5.png",
    "Ending-5.png",
    "Ending-5.png",
    "Ending-5.png",
];

function adjustImageSize() {
    const sceneImage = document.getElementById("StartingScreen");

    // Make the image fit inside <main> while keeping aspect ratio
    sceneImage.style.height = "100%";
    sceneImage.style.width = "auto";
    sceneImage.style.maxWidth = "100%";
    sceneImage.style.objectFit = "contain";
}

window.onload = () => {
    const textElement = document.getElementById("text1");
    const button = document.getElementById("nextbtn");
    const sceneImage = document.getElementById("StartingScreen");
    let index = 0;

    // Set initial content
    sceneImage.src = images[index];
    textElement.textContent = messages[index];
    adjustImageSize();

    button.onclick = () => {
        index++;

        if (index < messages.length) {
            textElement.textContent = messages[index];
            sceneImage.src = images[index];
            adjustImageSize(); // Resize after changing image
        }

        // When the last message is reached:
        if (index === messages.length - 1) {
            button.remove(); // Remove old button

            // Create new redirect button
            const beginbtn = document.createElement("button");
            beginbtn.textContent = "End Game";
            beginbtn.className = "beginbtn";
            document.getElementById("footer").appendChild(beginbtn);

            // Redirect on click
            beginbtn.onclick = () => {
                window.location.href = "end-card.html";
            };
        }
    };
};