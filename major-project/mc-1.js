const messages = [
    "“And she'll have a salad.”",
    "Marie gives you a look.",
    "“Alright-”",
    "“Uh, no. I want spagetti with meat sauce.”",
    "“Of course! Is that all for you guys?”",
    "“Actually, could you give us a second?”",
    "“Oh, yeah! Take your time, I'll be right back.”",
    "“Thank you.”",
    "“Marie looks at you with a glance only described as foul; That didn't go to plan.”",
];

const images = [
    "Neutral-2.png",
    "Mad-2.png",
    "Mad-2.png",
    "Uneasy-talking-2.png",
    "Uneasy-2.png",
    "Uneasy-talking-2.png",
    "Uneasy-2.png",
    "Laughing-talking-2.png",
    "Mad-2.png",
    "Mad-2.png",
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
            beginbtn.textContent = "Secret Ending";
            beginbtn.className = "beginbtn";
            document.getElementById("footer").appendChild(beginbtn);

            // Redirect on click
            beginbtn.onclick = () => {
                window.location.href = "ending5.html";
            };
        }
    };
};

// Also resize image on window resize
window.onresize = adjustImageSize;