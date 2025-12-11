const messages = [
    "“And she'll have the spagetti with meat sauce.”",
    "“Alright, is that all for you guys?”",
    "“Yes, thank you.”",
    "The waiter walks away once more.",
    "“Thanks for ordering, but I could've done that myself”",
    "“I just wanted you to not have to worry about it.”",
    "Ah, thanks then.”",
];

const images = [
    "Neutral-2.png",
    "Neutral-2.png",
    "Normal-talking-2.png",
    "Neutral-2.png",
    "Uneasy-talking-2.png",
    "Uneasy-2.png",
    "Uneasy-talking-2.png",
    "Uneasy-2.png",
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
            beginbtn.textContent = "Hobbies & Interests";
            beginbtn.className = "beginbtn";
            document.getElementById("footer").appendChild(beginbtn);

            // Redirect on click
            beginbtn.onclick = () => {
                window.location.href = "hobbies&interests---.html";
            };
        }
    };
};

// Also resize image on window resize
window.onresize = adjustImageSize;