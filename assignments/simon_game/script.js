const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let level = 0;
let started = false;
let score = 0;
let highscore = localStorage.getItem("highscore") || 0;

document.getElementById("highscore").innerText = highscore;

// Start game on key press
document.addEventListener("keydown", () => {
  if (!started) {
    started = true;
    level = 0;
    score = 0;
    gamePattern = [];
    userPattern = [];
    document.getElementById("score").innerText = score;
    nextLevel(); // start Level 1
  }
});

// Start next level
function nextLevel() {
  userPattern = [];
  level++;
  score = level - 1;
  document.getElementById("score").innerText = score;

  showBanner(level);

  // Generate only one new color
  const randomColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);

  // Flash the new color once
  flashButton(randomColor);

  // Prompt user to remember
  document.getElementById("title").textContent = "Remember the blink!";
}

// Flash button once
function flashButton(color) {
  const btn = document.getElementById(color);
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 400);
}

// Show level banner
function showBanner(level) {
  const banner = document.getElementById("banner");
  banner.textContent = `🎉 Level ${level}! 🎉`;
  banner.style.display = "block";
  setTimeout(() => (banner.style.display = "none"), 1200);
}

// Handle user clicks
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const chosenColor = btn.id;
    userPattern.push(chosenColor);
    flashButton(chosenColor);

    // Check correctness immediately on each click
    checkAnswer(userPattern.length - 1);
  });
});

// Check user input
function checkAnswer(currentIndex) {
  // If clicked correct color in sequence so far
  if (gamePattern[currentIndex] === userPattern[currentIndex]) {
    // If full sequence entered, go to next level
    if (userPattern.length === gamePattern.length) {
      setTimeout(() => nextLevel(), 800);
    }
  } else {
    // Wrong click → game over
    gameOver();
  }
}

// Game over
function gameOver() {
  document.getElementById("title").textContent =
    "❌ Wrong! Press Any Key to Restart";

  document.body.classList.add("wrong-flash");
  setTimeout(() => document.body.classList.remove("wrong-flash"), 500);

  if (score > highscore) {
    highscore = score;
    localStorage.setItem("highscore", highscore);
  }

  document.getElementById("highscore").innerText = highscore;

  started = false;
}



