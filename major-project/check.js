const messages = [
    "The waiter then walks over with the bill and sets it down on the table between the two of you",
    "“Here's your guys' check, take your time, no rush with it.”",
    "“Thank you!”",
    "“Thanks.”",
];

const images = [
    "Neutral-3.png",
    "Normal-3.png",
    "Normal-talking-3.png",
    "Normal-3.png",
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