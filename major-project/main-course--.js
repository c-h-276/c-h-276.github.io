const messages = [
    "“Oh, have you picked out what to order yet?”",
    "“Oh, no I haven't but...”",
    "“Oh yeah!”",
    "“I'm going to get spagetti with meat sauce.”",
    "“I hear their marinara is to DIE for.”",
    "“Sounds good. Let me see...”",
    "The chicken parmasean looks good.",
    "The waiter comes over again. As he's walking over, he takes out his server book and starts to ask your order for the main course",
    "“Have you guys chosen what you'd like to eat?”",
    "“Yep, I'll have the chicken parm...”",
];

const images = [
    "Neutral-2.png",
    "Neutral-talking-2.png",
    "Normal-talking-2.png",
    "Laughing-2.png",
    "Laughing-talking-2.png",
    "Normal-2.png",
    "Laughing-2.png",
    "Neutral-2.png",
    "Normal-2.png",
    "Normal-2.png",
    "Normal-2.png",
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