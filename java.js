
const questions = [
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "==", correct: false },
            { text: "-", correct: false },
            { text: "/", correct: false },
            { text: "=", correct: true },
        ]
    },
    {
        question: "Which of the following is a correct way to declare a variable in javascript",
        answers: [
            { text: "let name = John", correct: true },
            { text: "variable name = John", correct: false },
            { text: "string name = John", correct: false },
            { text: "name = John", correct: false},
        ]
    },
    {
        question: "What is the correct syntax to output Hello,World! in javascript?",
        answers: [
            { text: "print(Hello,World!)", correct: false},
            { text: "echo Hello,World!", correct: false },
            { text: "console.log(Hello,World!)", correct: true },
            { text: "document.write(Hello,World!)", correct: false },
        ]
    },
    {
        question: "How can you add a comment in javascript?",
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "!This is a comment", correct: false},
            { text: "# This is a comment", correct: false },
            { text: "/* This is a comment", correct: false },
        ]
    },
    {
        question: "How do you create a function in javascript",
        answers: [
            { text: "function myFunction() {}", correct: true },
            { text: "def myFunction() {}", correct: false },
            { text: "func myFunction() {}", correct: false },
            { text: "create myFunction() {}", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your final score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Submit";
    nextButton.style.display = "block";

    // Add event listener for the Submit button
nextButton.addEventListener('click', function() {
    window.location.href = 'codequiz.html';
});
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();