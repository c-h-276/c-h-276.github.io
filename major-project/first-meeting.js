const messages = [
    "“Nice to meet you, I'm Marie!”",
    "“David and Bella have told me a lot about you.”",
    "She's sitting in a sparkly black dress that ends at her knees.",
    "She seems excited and friendly.",
];

const images = [
    "Normal Closed Talking.png",
    "Normal Normal Talking.png",
    "Normal Normal.png",
    "Normal Normal.png",
];


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

                c1.style.display = "block";
                c2.style.display = "block";
                c3.style.display = "block";
                };

            }
        };
    };
