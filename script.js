const questions = [
    {
        question: "Какой язык используется для веб-разработки?",
        answers: ["Python", "JavaScript", "C++"],
        correct: 1
    },
    // Добавь больше вопросов здесь
];

const quizContainer = document.getElementById('quiz-container');
const modal = document.getElementById('quiz-modal');
const openQuizButton = document.getElementById('open-quiz');
const closeButton = document.getElementsByClassName('close')[0];

// Открытие модального окна викторины
openQuizButton.onclick = function() {
    modal.style.display = "block";
    loadQuestions();
}

// Закрытие модального окна
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Загрузка вопросов в контейнер
function loadQuestions() {
    quizContainer.innerHTML = ''; // Очистка контейнера
    questions.forEach((q, index) => {
        quizContainer.innerHTML += `<p>${q.question}</p>`;
        q.answers.forEach((answer, i) => {
            quizContainer.innerHTML += `<input type="radio" name="question${index}" value="${i}"> ${answer}<br>`;
        });
    });
}

// Отправка ответов (добавь свою логику)
document.getElementById('submit').onclick = function() {
    // Здесь можно обработать неправильные/правильные ответы
    alert("Ответы отправлены!");
    modal.style.display = "none"; // Закрытие модального окна
}