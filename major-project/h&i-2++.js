const messages = [
    "“Really? What kinds?”",
    "“Anything really.”",
    "“Skiing, tennis, soccer. I even joined a hobbiests baseball team that plays games on the weekends.”",
    "“That's so cool!”",
    "“Yeah. Going out and moving my body makes me feel great.”",
    "“I really like to have fun with people outside.”",
    "“Wow. Maybe we can play together sometime!”",
    "“Oh, yeah! We can totally play or do something together.”",
    "“Hehe! Count me in.”",
];

const images = [
    "Neutral-talking-2.png",
    "Neutral-2.png",
    "Normal-2.png",
    "Laughing-talking-2.png",
    "Normal-2.png",
    "Normal-2.png",
    "Normal-talking-2.png",
    "Normal-2.png",
    "Laughing-2.png",
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
                window.location.href = "eating++.html";
            };
        }
    };
};