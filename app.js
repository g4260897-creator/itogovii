let secretNumber;
let attempts = 0;

// Устанавливаем новый диапазон и генерируем число
function setRange() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (min >= max) {
        document.getElementById('message').textContent = 'Ошибка: минимум должен быть меньше максимума!';
        return;
    }

    // Генерируем случайное число в заданном диапазоне
    secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Обновляем отображение диапазона
    document.getElementById('range-min').textContent = min;
    document.getElementById('range-max').textContent = max;

    // Сбрасываем счётчик попыток
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('message').textContent = '';
    document.getElementById('guess').value = '';
}

// Проверяем предположение игрока
function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);

    attempts++;
    document.getElementById('attempts').textContent = attempts;

    if (guess === secretNumber) {
        document.getElementById('message').textContent = '🎉 Угадал!';
    } else if (guess < secretNumber) {
        document.getElementById('message').textContent = 'Слишком маленькое!';
    } else {
        document.getElementById('message').textContent = 'Слишком большое!';
    }
}

// Инициализация при загрузке страницы
setRange();
