const messages = [
    "“I'm sorry?”",
    "“Don't act like you don't know about this.”",
    "“Y'know, when women order a bunch of expensive foods and bat their eyelashes to get they guy to pay for them.”",
    "“That's a super common thing that happens to guys, like, all the time.”",
    "“Oh, has that happened to you recently?”",
    "“Well...”",
    "“...”",
    "“No. Not recently.”",
    "“...”",
    "“To be fair, it happened to a bunch of my friends.”",
    "“Ah. I see.”",
];

const images = [
    "Normal-3.png",
    "Neutral-3.png",
    "Neutral-3.png",
    "Mad-3.png",
    "Mad-3.png",
    "Mad-3.png",
    "Mad-3.png",
    "Upset-3.png",
    "Uneasy-talking-2.png",
    "Uneasy-3.png",
    "Uneasy-talking-3.png",
    "Upset-talking-3.png",
    "Uneasy-3.png",
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
            beginbtn.textContent = "Check";
            beginbtn.className = "beginbtn";
            document.getElementById("footer").appendChild(beginbtn);

            // Redirect on click
            beginbtn.onclick = () => {
                window.location.href = "check.html";
            };
        }
    };
};