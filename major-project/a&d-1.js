const messages = [
    "“I'm doing pretty well myself, thank you! What can I get started to drink for you guys?”",
    "“I'd like a beer, thank you.”",
    "“Could I please get a virgin daiquiri?”",
    "“Of course! Feel free to have a look over the main course menu while I get those started for you guys.”",
    "The waiter walks away and the conversation continues",
];

const images = [
    "Normal-1.png",
    "Normal-1.png",
    "Normal-talking-1.png",
    "Normal-1.png",
    "Normal-1.png",
    "Normal-1.png",
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
                window.location.href = "work&school.html";
            };
        }
    };
};

// Also resize image on window resize
window.onresize = adjustImageSize;