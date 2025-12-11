const messages = [
    "Marie looks at you with surprise.",
    "“Thanks! You really don't have to, though.”",
    "You take the check and write out the final amount before sticking your card inside.",
    "You leave a 25% tip.",
    "The waiter comes and picks up the check a minute later.",
    "“Thank you, Sir. I'll have that right back for you.”",
];

const images = [
    "Normal-4.png",
    "Normal-talking-4.png",
    "Normal-4.png",
    "Normal-4.png",
    "Normal-4.png",
    "Normal-4.png",
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
                window.location.href = "ending3.html";
            };
        }
    };
};