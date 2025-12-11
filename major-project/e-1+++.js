const messages = [
    "“Yeah, I will say I really enjoy my job.”",
    "“I work for Adidas as a financial advisor in the upper ranks of the company. It's very interesting.”",
    "“You see, there was this one project I was working on with a few coworkers and-”",
    "As you talk, you regrettably don't notice Marie's eyes glaze over in boredom.",
    "You talk for a solid 15 minutes without stopping.",
    "During which your food gets cold and your date stops listening",
    "“-And that's when I realised he never signed off on it in the first place!”",
    "“Hahahahahahaha!”",
    "“Hahaha. That was a pretty funny story.”",
    "“You think so? I have a few more off the top of my head-”",
    "“No, it's fine!”",
    "“You should save them...for...other times!”",
    "“If you say so. You're missing out! Haha!”",
];

const images = [
    "Normal-3.png",
    "Neutral-3.png",
    "Neutral-3.png",
    "Mad-3.png",
    "Mad-3.png",
    "Mad-3.png",
    "Mad-3.png",
    "Upset-3.png",
    "Uneasy-talking-3.png",
    "Uneasy-3.png",
    "Uneasy-talking-3.png",
    "Upset-talking-3.png",
    "Uneasy-3.png",
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
                window.location.href = "check+++.html";
            };
        }
    };
};