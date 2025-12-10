const messages = [
    "“Nice to meet you, I'm Marie!”",
    "“David and Bella have told me a lot about you.”",
    "She's sitting in a sparkly black dress that ends at her shins.",
    "She seems excited and friendly.",
];

const images = [
    "Laughing-1.png",
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

    const c1 = document.getElementById("choice1");
    const c2 = document.getElementById("choice2");
    const c3 = document.getElementById("choice3");

    // hide choices by default
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";

    let index = 0;

    // show first message & image
    textElement.textContent = messages[index];
    sceneImage.src = images[index];
    adjustImageSize();

    button.onclick = () => {
        // If we're on the last message already
        if (index === messages.length - 1) {
            // Hide button and show choices
            button.style.display = "none";
            c1.style.display = "block";
            c2.style.display = "block";
            c3.style.display = "block";
            return; // stop here
        }

        // Otherwise, move to next message
        index++;
        textElement.textContent = messages[index];
        sceneImage.src = images[index];
        adjustImageSize();
    };
};