const messages = [
    "“Hey, thanks for being here and all, but...”",
    "“What's up?”",
    "“I don't think this is going to work.”",
    "“What do you mean? This date went great!”",
    "“No it didn't, you know it didn't.”",
    "“This entire night was a shitshow. I don't date shitshows.”",
    "“What are you talking about? I was amazing!”",
    "“You should feel lucky you got to experience me! A tall, blue-eyed, man in finance!”",
    "“I'm great, I have a great job, great personality!”",
    "You're now making your way outside as you follow her out of the restaruant.",
    "Marie turns to stop and look at you.",
    "“No, you're not.”",
    "“Just because you feel all high and mighty for how you “came all the way out here” to see me,”",
    "“Doesn't mean I. Owe. You. Anything.”",
    "“I am just as good as you, if I should feel lucky, you should feel lucky.”",
    "“Man, I knew David was trying to introduce me to another whore.”",
    "“Excuse me?”",
    "“You women are all the same, leading us on and leaving whenever you don't get what you want.”",
    "“God, you're being such a bitch, I can't believe I put up with you.”",
    "Just then, in one swift motion, Marie lands her heel right between your legs.",
    "You land on the floor, doubled over in agony.",
    "Marie walks away, the last thing you see of her is her black hair waving as she struts behind the block.",
    "David's wife, Isabella hears about the incedent and doesn't let you hang out at their house anymore.",
    "David eventually stops talking to you.",
    "Huh.",
    "I wonder if this is why you couldn't get a girlfriend.",
    "Ending 4 : A really terrible date",
];

const images = [
    "Upset-talking-5.png",
    "Upset-5.png",
    "Uneasy-talking-5.png",
    "Upset-5.png",
    "Mad-talking-5.png",
    "Mad-talking-5.png",
    "Upset-5.png",
    "Mad-5.png",
    "Mad-5.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
    "Ending4.png",
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