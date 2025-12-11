const messages = [
    "“Thanks for the date, uh...”",
    "“What's up?”",
    "“Wanna do this again sometime?”",
    "“Sure, that sounds fun.”",
    "The next few dates came and went, but nothing ever came of your relationship.",
    "Marie said you were just too different from eachother.",
    "You were hurt, but agreed that your relationship wasn't right.",
    "So you two parted ways, expecting never to see eachother again.",
    "You go on a few more dates with different women, but none of them stick.",
    "Until you meet a girl named Ashley.",
    "You two hit it off and live the fairy vtale life of your dreams,",
    "Moving in together, getting engaged...",
    "Until the family dinner when you meet Ashley's sibiling who had been away for the years you've been together;",
    "It's Marie.",
    "How awkward for you.",
    "Ending 2 : It was nice anyways",
];

const images = [
    "Normal-5.png",
    "Neutral-talking-5.png",
    "Neutral-5.png",
    "Normal-talking-5.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
    "Ending-3.png",
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
            beginbtn.textContent = "End Game";
            beginbtn.className = "beginbtn";
            document.getElementById("footer").appendChild(beginbtn);

            // Redirect on click
            beginbtn.onclick = () => {
                window.location.href = "end-card.html";
            };
        }
    };
};