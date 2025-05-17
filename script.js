const questions = [
    {
        question: "Какой язык используется для веб-разработки?",
        answers: ["Python", "JavaScript", "C++"],
        correct: 1 // Индекс правильного ответа
    },
    // Добавьте больше вопросов здесь
];

const quizContainer = document.getElementById('quiz-container');
const startQuizButton = document.getElementById('start-quiz');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const restartQuizButton = document.getElementById('restart-quiz');
const finishQuizButton = document.getElementById('finish-quiz');

let currentQuestionIndex = 0;
let score = 0;

// Открытие викторины
startQuizButton.onclick = function() {
    startQuizButton.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
}

// Загрузка текущего вопроса
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `<p>${currentQuestion.question}</p>`;
    currentQuestion.answers.forEach((answer, i) => {
        quizContainer.innerHTML += `<input type="radio" name="question" value="${i}"> ${answer}<br>`;
    });
    quizContainer.innerHTML += `<button id="next-question">Далее</button>`;
    
    // Обработчик для кнопки "Далее"
    document.getElementById('next-question').onclick = function() {
        checkAnswer();
    };
}

// Проверка ответа
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="question"]:checked');
    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);
        if (answerIndex === questions[currentQuestionIndex].correct) {
            score++; // Увеличиваем счет за правильный ответ
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Показать результаты
function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultMessage.textContent = `Ваш результат: ${score} из ${questions.length}`;
}

// Перезапуск викторины
restartQuizButton.onclick = function() {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.style.display = 'none';
    startQuizButton.style.display = 'block';
}

// Завершение викторины
finishQuizButton.onclick = function() {
    window.close(); // Закрытие вкладки (для браузеров, где это разрешено)
}
