const messages = [
    "“I was pretty nervous to go on a blind date since I've never been on one before, but this isn't as bad as I thought it would be.”",
    "“I really like the restaurant, though. Bella helped me pick it out. It's really nice, isn't it?”",
    "“It is pretty nice.”",
    "“I might come here again with family. It seems like a good place or birthdays and intimate gatherings.”",
    "“It would probably cost a ton, though.”",
    "“Yeah, this place does look pretty spendy.”",
];

const images = [
    "Uneasy-talking-1.png",
    "Normal-talking-1.png",
    "Normal-1.png",
    "Neutral-talking-1.png",
    "Mad-talking-1.png",
    "Neutral-1.png",
    "Neutral-1.png",
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
            beginbtn.textContent = "Apps & Drinks";
            beginbtn.className = "beginbtn";
            document.getElementById("footer").appendChild(beginbtn);

            // Redirect on click
            beginbtn.onclick = () => {
                window.location.href = "apps&drinks.html";
            };
        }
    };
};

// Also resize image on window resize
window.onresize = adjustImageSize;