const quizQuestions = [
    {
        question: "What is the Capital of Pakistan?",
        choices: ["Peshawar", "Karachi", "Multan", "Islamabad"],
        correctAnswer: "Islamabad"
    },
    {
        question: "What is your nick Name?",
        choices: ["Guli", "Khan", "Zar", "Gulzar"],
        correctAnswer: "Guli"
    },
    {
        question: "Who was the 2nd last PM of Pakistan?",
        choices: ["Imran Khan", "Shahbaz Sharif", "Nawaz Sharif", "Asif Ali Zardari"],
        correctAnswer: "Imran Khan"
    },
    {
        question: "Who was the founder of Pakistan?",
        choices: ["Jinnah Baba", "Gandhi Ji", "Allama Iqbal", "Dr Qadir Khan"],
        correctAnswer: "Jinnah Baba"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["O2", "H2O", "CO2", "NaCl"],
        correctAnswer: "H2O"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.btn');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-btn');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    nextButton.textContent = 'Next Question';
    nextButton.removeEventListener('click', startGame); // Remove the startGame event listener if added
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.onclick = () => selectAnswer(currentQuestion.choices[index]);
    });
}

function resetState() {
    nextButton.style.display = 'none';  // Hide the "Next Question" button initially
    answerButtons.forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });
}

function selectAnswer(selectedAnswer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
        alert('Correct!');
    } else {
        alert('Try Again!');
    }

    answerButtons.forEach(button => {
        button.classList.add(button.textContent === currentQuestion.correctAnswer ? 'correct' : 'wrong');
        button.disabled = true;
    });

    nextButton.style.display = 'block';  // Show the "Next Question" button after an answer is selected
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    questionElement.textContent = `Quiz Complete! Your final score is ${score}.`;
    answerButtons.forEach(button => button.style.display = 'none');
    nextButton.textContent = 'Play Again';
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', startGame);
}

nextButton.addEventListener('click', showNextQuestion);

startGame();

// Add hover effects and keyboard interaction
answerButtons.forEach((button, index) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#0062cc';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#007bff';
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key >= 1 && e.key <= 4) {
        answerButtons[e.key - 1].click();
    }
});
