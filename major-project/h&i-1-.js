const messages = [
    "“Wow! Where've you been?”",
    "“I travel all over, really.”",
    "“I've been all over the US in most major cities, Paris, Hong Kong, Berlin.”",
    "“I really like learning about new cultures and taking photos of new sights.”",
    "“That's really cool! I've always wanted to go to different places.”",
    "“I haven't seen past the east coast, unfortunately.”",
    "“Really? Then we should go somewhere together.”",
    "“I'd like that a lot. Sounds fun!”",
];

const images = [
    "Neutral-talking-2.png",
    "Neutral-2.png",
    "Normal-2.png",
    "Normal-2.png",
    "Laughing-talking-2.png",
    "Mad-talking-2.png",
    "Neutral-2.png",
    "Laughing-talking-2.png",
    "Laughing-talking-2.png",
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
            beginbtn.textContent = "Eating";
            beginbtn.className = "beginbtn";
            document.getElementById("footer").appendChild(beginbtn);

            // Redirect on click
            beginbtn.onclick = () => {
                window.location.href = "eating-.html";
            };
        }
    };
};