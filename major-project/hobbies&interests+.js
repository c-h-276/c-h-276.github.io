const messages = [
    "“So what do you like to do?”",
    "“I really like model building.”",
    "“Really? What's that?”",
    "“It's where you buy little model building kits and just follow the instructions.”",
    "“Oh wow. Does that take you a long time?”",
    "“I finish about one model every few days to a week.”",
    "“It depends on how big it is and how much time I have.”",
    "“That sounds pretty fun! How'd you get into it?”",
    "“I watched a lot of YouTube growing up, and these kits popped up a lot.”",
    "“What about you? What do you do on your off time?”",
];

const images = [
    "Normal-2.png",
    "Normal-talking-2.png",
    "Normal-2.png",
    "Laughing-talking-2.png",
    "Normal-2.png",
    "Neutral-talking-2.png",
    "Normal-talking-2.png",
    "Normal-2.png",
    "Neutral-talking-2.png",
    "Normal-talking-2.png",
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