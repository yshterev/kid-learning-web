let score = 0;
let clickCount = 0;
const scoreText = document.getElementById("score");
const clickCountText = document.getElementById("clickCount");
const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", function() {
    score++;
    clickCount++;
    scoreText.textContent = score;
    clickCountText.textContent = clickCount;
});
