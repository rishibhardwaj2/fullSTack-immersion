const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        options: ["J.K. Rowling", "Shakespeare", "Mark Twain", "Charles Dickens"],
        answer: "J.K. Rowling"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

document.getElementById("high-score").textContent = `High Score: ${highScore}`;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
    let q = questions[currentQuestionIndex];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestionIndex].answer) {
        score++;
        scoreEl.textContent = `Score: ${score}`;
    }
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextBtn.style.display = "none";
    } else {
        endGame();
    }
};

function endGame() {
    if (score > highScore) {
        localStorage.setItem("highScore", score);
        highScore = score;
    }
    alert(`Game Over! Your Score: ${score}`);
    location.reload();
}

showQuestion();
nextBtn.style.display = "none";
