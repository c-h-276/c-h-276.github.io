const messages = [
    "“Alright... And you miss?”",
    "“Oh, yeah... Uhm...”",
    "“Can I get a Virgin Daiquiri?”",
    "“Coming right up! Feel free to have a look over the main course menu while I get those started for you guys.”",
    "Thank you!”",
    "The waiter walks away and comes back quickly with your drinks.",
];

const images = [
    "Neutral-1.png",
    "Uneasy-talking-1.png",
    "Neutral-talking-1.png",
    "Normal-1.png",
    "Normal-talking-1.png",
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
            beginbtn.textContent = "Work & School";
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