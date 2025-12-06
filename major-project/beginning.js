const texts = [
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

let currentIndex = 0;
const totalIndex = 9;

const changeTextButton = document.getElementById("nextbtn");
const displayText = document.getElementById("text1");

changeTextButton.addEventListener("click", () => {
    displayText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1);
});

displayText.textContent = texts[currentIndex];
currentIndex = (currentIndex + 1);