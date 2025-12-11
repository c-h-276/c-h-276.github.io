const messages = [
    "Marie looks at you with surprise",
    "“Oh!”",
    "“Uh, sure.”",
    "She takes the check and writes out the final amount before sticking her card inside.",
    "The waiter comes and picks up the check immideately",
    "“Thank you, Miss. I'll have that right back for you.”",
];

const images = [
    "Neutral-4.png",
    "Neutral-talking-4.png",
    "Mad-talking-4.png",
    "Mad-4.png",
    "Mad-4.png",
    "Mad-4.png",
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
            beginbtn.textContent = "End Date";
            beginbtn.className = "beginbtn";
            document.getElementById("footer").appendChild(beginbtn);

            // Redirect on click
            beginbtn.onclick = () => {
                window.location.href = "ending2.html";
            };
        }
    };
};