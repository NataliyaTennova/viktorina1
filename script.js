document.addEventListener("DOMContentLoaded", function() {
const questions = [
    {
        question: "Какое самое быстрое животное на Земле?",
        answers: ["Тигр", "Гепард", "Лошадь"],
        correct: 1 // Гепард
    },
    {
        question: "Какое млекопитающее может летать?",
        answers: ["Слон", "Крыса", "Морская свинка", "Летучая мышь"],
        correct: 3 // Летучая мышь
    },
    {
        question: "Какое животное известно как 'капитан-зебра'?",
        answers: ["Слон", "Зебра", "Лев", "Тигр"],
        correct: 1 // Зебра
    },
    {
        question: "Как называется маленький арктический медведь?",
        answers: ["Панды", "Белый медведь", "Медвежонок", "Пухляш"],
        correct: 2 // Медвежонок
    },
    {
        question: "Какое животное может спать до 20 часов в сутки?",
        answers: ["Коала", "Горилла", "Лев", "Все вышеперечисленные"],
        correct: 3 // Все вышеперечисленные
    },
    {
        question: "Какой птицей считается самый наилучший имитатор звуков?",
        answers: ["Попугай", "Голубь", "Синица", "Удод"],
        correct: 0 // Попугай
    },
    {
        question: "Какое животное умеет изменять цвет своего тела?",
        answers: ["Хамелеон", "Коралловая рыба", "Слон", "Крокодил"],
        correct: 0 // Хамелеон
    },
    {
        question: "Кто из этих животных является самым большим?",
        answers: ["Синий кит", "Слон", "Жираф", "Тугарин"],
        correct: 0 // Синий кит
    },
    {
        question: "Какое животное является символом мира?",
        answers: ["Орёл", "Долина", "Голубь", "Сокол"],
        correct: 2 // Голубь
    },
    {
        question: "Какое млекопитающее имеет самый длинный язык?",
        answers: ["Слон", "Голубь", "Жираф", "Медуза"],
        correct: 2 // Жираф
    },
];

    const quizContainer = document.getElementById('quiz-container');
    const startQuizButton = document.getElementById('start-quiz');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    const restartQuizButton = document.getElementById('restart-quiz');
    const finishQuizButton = document.getElementById('finish-quiz');

    // Проверка на существование элементов
    if (!startQuizButton || !quizContainer || !resultContainer || !resultMessage || !restartQuizButton || !finishQuizButton) {
        console.error("Не удалось найти один или несколько элементов на странице.");
        return; // Если хотя бы один элемент не найден, прекратить выполнение скрипта
    }

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
        quizContainer.style.display = 'none'; // Скрыть контейнер с вопросами
    }

    // Завершение викторины
    finishQuizButton.onclick = function() {
        window.close(); // Закрытие вкладки (для браузеров, где это разрешено)
    }
});
