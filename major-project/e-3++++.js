const messages = [
    "“Oh! Thank you!”",
    "“I haven't been able to wear this out anywhere yet, so I thought this would be a perfect occasion.”",
    "“Well, I feel honored to be the first to see it. You look amazing.”",
    "“Haha, thanks!”",
    "“I don't get to wear this kind of stuff very often, so it's fun when I have an excuse.”",
    "You smile.",
    "“You should dress up more often. You look good.”",
    "“Thanks. I think I will.”",
];

const images = [
    "Laughing-3.png",
    "Normal-talking-3.png",
    "Normal-3.png",
    "Laughing-3.png",
    "Normal-talking-3.png",
    "Normal-3.png",
    "Normal-3.png",
    "Normal-talking-3.png"
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
                window.location.href = "check++++.html";
            };
        }
    };
};