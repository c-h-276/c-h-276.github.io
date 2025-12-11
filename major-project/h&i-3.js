const messages = [
    "“What do you like to read?”",
    "“My favorite genres are science fiction and bibliographies.”",
    "“And the occasional fantasy.”",
    "“My most recent reads have been interesting. I just finsihed reading Annihilation from Jeff Vandermeer.”",
    "“How was it?”",
    "“Alright. I thought the writing was good but the ending kind of weirded me out.”",
    "“Really? I was going to ask if that was a reccomendation but I guess not.”",
    "“Yeah. I would rather introduce you to some more popular classics like Orwell's 1989 or The Martian. Stuff that's GOOD-good.”",
    "“Good to know!”",
];

const images = [
    "Neutral-talking-2.png",
    "Neutral-2.png",
    "Normal-2.png",
    "Laughing-talking-2.png",
    "Mad-talking-2.png",
    "Neutral-2.png",
    "Laughing-talking-2.png",
    "Laughing-talking-2.png",
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
                window.location.href = "eating.html";
            };
        }
    };
};