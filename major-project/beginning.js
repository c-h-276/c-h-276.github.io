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

function adjustImageSize() {
        const isPortrait = window.innerHeight > window.innerWidth;

        sceneImage.style.display = "block";
        sceneImage.style.margin = "0 auto";
        sceneImage.style.width = "auto";
        sceneImage.style.height = "auto";
        sceneImage.style.objectFit = "contain";

        if (isPortrait) {
            sceneImage.style.maxHeight = "50vh";
            sceneImage.style.maxWidth = "90%";
        } else {
            sceneImage.style.maxHeight = "70vh";
            sceneImage.style.maxWidth = "80%";
        }
    }

adjustImageSize();
window.addEventListener("resize", adjustImageSize);

window.onload = () => {
        const textElement = document.getElementById("text1");
        const button = document.getElementById("nextbtn");
        const sceneImage = document.getElementById("StartingScreen");

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
