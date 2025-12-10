const messages = [
    "“Oh gosh... I graduated a while ago now.”",
    "“What has it been, six years? I think?”",
    "“Oh, I just was asking because I've been thinking about going for my masters recently.”",
    "“Are you going to use it to get a better job?”",
    "“Maybe...”",
    "“I'm thinking about it.”",
    "“How was marketing, though?”",
    "“But yeah! I got a degree in management.”",
    "“I'm apart of the marketing team of a sportswear company.”",
    "“Maybe you've heard of it, BB-Sportz? It's small but it's gone a bit viral rcecently.”",
    "“Generally I work on managing the people running the social media accounts.”",
];

const images = [
    "Neutral-talking-2.png",
    "Mad-talking-2.png",
    "Neutral-2.png",
    "Nutral-talking-2.png",
    "Neutral-2.png",
    "Normal-2.png",
    "Normal-2.png",
    "Neutral-talking-2.png",
    "Normal-talking-2.png",
    "Laughing-talking-2.png",
    "Normal-talking-2.png",
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
                window.location.href = "main-course.html";
            };
        }
    };
};

// Also resize image on window resize
window.onresize = adjustImageSize;