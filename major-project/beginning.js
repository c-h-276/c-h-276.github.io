const messages = [
    "You are Kevin.",
    "An elegeble bachelor of 26 years-old living alone in his studio apartment.",
    "You are about to go on a blind date.",
    "This was suggested to you by your friend David after you expressed your concerns about dating in recent years.",
    "He decides to set you up with one of his wife's friends.",
    "“Table for two for Marie?”",
    "The hostess greets you warmly and directs your attention over to a young woman sitting at a table in the middle of the restaraunt.",
    "As you walk over, she looks up from her phone and smiles;",
    "“Oh, hi! You must be Kevin.”",
    "You sit down, and the date begins.",
];

const images = [
    "Starting-screen.png",
    "Starting-screen.png",
    "Starting-screen.png",
    "Starting-screen.png",
    "Starting-screen.png",
    "Starting-screen.png",
    "Starting-screen.png",
    "Starting-screen.png",
    "Starting-screen.png",
    "Starting-screen.png",
];

window.onload = () => {
        const textElement = document.getElementById("text1");
        const button = document.getElementById("nextbtn");
        const sceneImage = document.getElementById("StartingScreen");

        const mainSection = document.getElementById("main");
        sceneImage.style.display = "block";
        sceneImage.style.position = "absolute";
        sceneImage.style.top = "50%";
        sceneImage.style.left = "50%";
        sceneImage.style.height = "100%";       // full height of main
        sceneImage.style.width = "auto";        // keep aspect ratio
        sceneImage.style.transform = "translate(-50%, -50%)"; // center horizontally & vertically
        sceneImage.style.objectFit = "cover";

        let index = 0;
        textElement.textContent = messages[index];
        sceneImage.src = images[index];
        button.textContent = "Next";

        button.onclick = () => {
            index++;

            if (index < messages.length) {
                textElement.textContent = messages[index];
                sceneImage.src = images[index];
            }

            // When the last message is reached:
            if (index === messages.length - 1) {
                button.remove(); // Remove old button

                // Create new redirect button
                const beginbtn = document.createElement("button");
                beginbtn.textContent = "Begin Date";
                beginbtn.className = "beginbtn";
                document.getElementById("footer").appendChild(beginbtn);

                // Redirect on click
                beginbtn.onclick = () => {
                    window.location.href = "first-meeting.html";
                };

            }
        };
    };
