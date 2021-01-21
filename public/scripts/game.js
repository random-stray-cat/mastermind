const colors = ["red", "green", "yellow", "blue", "purple", "aqua"];
const current = document.querySelector(".current");
const guessBtn = document.querySelector("#guessBtn");
const currentGuessCircles = document.querySelectorAll(".current .code .circle");
const currentFeedbackCricles = document.querySelectorAll(".current .feedback .circle");

guessBtn.addEventListener("click", () => {
    for (let i = 0; i < currentGuessCircles.length; ++i) {
        const color = colors[~~(Math.random() * colors.length)];
        currentGuessCircles[i].className = `circle ${color}`;
        console.log(`${i}: ${color}`);
    }
});
