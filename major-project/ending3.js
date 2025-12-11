const messages = [
    "“Hey, uh...”",
    "“Hm?”",
    "“I don't think this is going to work.”",
    "“What do you mean?”",
    "“Like, I just don't think I'd like to go on another date with you.”",
    "“...”",
    "“Sure.”",
    "“Great.”",
    "“Huh?”",
    "“I guess I can't get even one thing right.”",
    "“You show up, treat a girl nice, and still get dumped? Bullshit.”",
    "“Uh...”",
    "“Well have fun with your life, I guess I'll try again another time with someone else.”",
    "“Have a great evening.”",
    "You walk out the door angry and bitter of what became of tonight.",
    "Marie is confused and leaves a few minutes later. But you don't know that because you don't bother to ask.",
    "You're too busy thinking about how you can never find someone who's willing to give you a chance.",
    "This cycle has repeated with every other date you've been on, and will continue until you figure it out.",
    "You don't end up figuring it out.",
    "You still see Marie at events hosted by David and Isabella.",
    "You tend to ignore her out of embarrassment.",
    "And as you slowly grow older, you never grow up and realise you were the problem.",
    "Instead choosing to vent your frustrations to people online.",
    "God, what a loser.",
    "Ending 3 : It could've been worse"
];

const images = [
    "Normal-4.png",
    "Normal-talking-4.png",
    "Normal-4.png",
    "Normal-4.png",
    "Normal-4.png",
    "Ending2.png",
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