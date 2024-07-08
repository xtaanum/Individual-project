const questions = [
    {
        question: "What is the full meaning of CSS?",
        answers: [
            { text: "Creative style Sheets", correct: false },
            { text: "Cascading style sheet", correct: true },
            { text: "Computer style Sheets", correct: false },
            { text: "Colorful style Sheets", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            { text: "link", correct: false },
            { text: "css", correct: false },
            { text: "script", correct: false },
            { text: "style", correct: true},
        ]
    },
    {
        question: "Which property is used to change the background color?",
        answers: [
            { text: "background-color", correct: true},
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "bg-color", correct: false },
        ]
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        answers: [
            { text: "h1.all {background-color: blue;}", correct: false },
            { text: "h1 {background-color: blue;}", correct: true },
            { text: "all.h1 {background-color: blue;}", correct: false },
            { text: "h1.all.elements {background-color: blue;}", correct: false },
        ]
    },
    {
        question: "Which property is used to change the text color of an element?",
        answers: [
            { text: "text-color", correct: false },
            { text: "fgcolor", correct: false },
            { text: "color", correct: true },
            { text: "font-color", correct: false },
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
    nextButton.innerHTML = "submit";
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