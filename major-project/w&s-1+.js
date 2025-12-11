const messages = [
    "“What do you mean?”",
    "“Well, I'm drinking a beer. Don't you think you should loosen up a little?”",
    "“With alcohol?”",
    "“Oh! No thanks, I'm alright.”",
    "“It's hard for me to get to know someone while drinking, so I just don't drink on the first date.”",
    "“Oh, alright.”",
    "The table's mood grows to be a bit stale. Maybe you should change the subject.",
];

const images = [
    "Neutral-talking-2.png",
    "Neutral-2.png",
    "Upset-talking-2.png",
    "Neutral-talking-2.png",
    "Normal-talking-2.png",
    "Normal-2.png",
    "Neutral-2.png",
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
            beginbtn.textContent = "Main Course";
            beginbtn.className = "beginbtn";
            document.getElementById("footer").appendChild(beginbtn);

            // Redirect on click
            beginbtn.onclick = () => {
                window.location.href = "main-course+.html";
            };
        }
    };
};

// Also resize image on window resize
window.onresize = adjustImageSize;