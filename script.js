const quizQuestions = [
    {
        question: "What is the Capital of Pakistan?",
        choices: ["peshawar", "Karachi", "Multan", "Islamabad"],
        correctAnswer: "Islamabad"
    },
    {
        question: "What is your nick Name?",
        choices: ["Guli", "Khan", "Zar", "Gulzar"],
        correctAnswer: "Guli"
    },
    {
        question: "Who was the 2nd last PM of pakistan?",
        choices: ["Imran khan", "Shahbaz shrif", "Nawaz Shrif", "Asif ALi zardari"],
        correctAnswer: "Imran khan"
    },
    {
        question: "Who was the founder of pakistan?",
        choices: ["Jinah baba", "Gandi g", "Allama Iqbal", "Dr Qadir khan"],
        correctAnswer: "Jinah baba"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["O2", "H2O", "CO2", "NaCl"],
        correctAnswer: "H2O"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const buttons = document.querySelectorAll(".choices button");
    buttons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.disabled = false;
    });
}

function checkAnswer(button) {
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    if (button.dataset.answer === correctAnswer) {
        score++;
        document.getElementById("score").textContent = score;
    }
    document.querySelectorAll(".choices button").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        document.querySelector(".container").innerHTML = `<h1>Quiz Completed!</h1><p>Your final score is: ${score}</p>`;
    }
}

// Load the first question when the page loads
loadQuestion();
checkAnswer();
nextQuestion();