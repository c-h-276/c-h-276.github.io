const messages = [
    "“Well, I'd love to see you again, what do you think?”",
    "“I'd really like that. How does this Sunday sound?”",
    "“Sunday would be great, can we talk about it more over text?”",
    "“Yeah! My number is...”",
    "As the date came to a close, Marie felt good about the night's events. Sunday's date went just as well, and so on.",
    "You asked Marie to be her boyfriend after 2 months and you got married 2 years after that.",
    "Life goes on together and you find yourselves later wondering;",
    "What if David never introduced you two? If the date didn't go well? The first impression turned out badly?",
    "I guess that happened in some alternate universe that you may or may not want to experience.",
    "But whatever.",
    "All that matters is that it went well.",
    "Right?",
    "Ending 1 : Wedding bells"
];

const images = [
    "Normal-5.png",
    "Normal-talking-5.png",
    "Normal-5.png",
    "Laughing-talking-5.png",
    "Ending1.png",
    "Ending1.png",
    "Ending1.png",
    "Ending1.png",
    "Ending1.png",
    "Ending1.png",
    "Ending1.png",
    "Ending1.png",
    "Ending1.png",
    "Ending1.png",
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