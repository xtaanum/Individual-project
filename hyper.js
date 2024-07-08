const questions = [
    {
        question: "What is the full meaning of HTML?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text makeup Learning", correct: false },
            { text: "Hyper Test Maskup Language", correct: false },
            { text: "Hypher Test Makeup Language", correct: false },
        ]
    },
    {
        question: "Which HTML element is used for the largest heading?",
        answers: [
            { text: "h6", correct: false },
            { text: "header", correct: false },
            { text: "h1", correct: true },
            { text: "head", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "link", correct: false },
            { text: "a", correct: true },
            { text: "href", correct: false },
            { text: "nav", correct: false },
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [
            { text: "break", correct: false },
            { text: "br", correct: true },
            { text: "lb", correct: false },
            { text: "line", correct: false },
        ]
    },
    {
        question: "Which HTML attribute is used to define inline style?",
        answers: [
            { text: "font", correct: false },
            { text: "class", correct: false },
            { text: "styles", correct: false },
            { text: "style", correct: true },
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