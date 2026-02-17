document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const lotteryNumbersContainer = document.getElementById('lotteryNumbers');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '라이트 모드 전환';
    } else {
        themeToggle.textContent = '다크 모드 전환';
    }

    generateButton.addEventListener('click', generateLotteryNumbers);
    themeToggle.addEventListener('click', toggleTheme);

    function generateLotteryNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        displayNumbers(Array.from(numbers).sort((a, b) => a - b));
    }

    function displayNumbers(numbers) {
        lotteryNumbersContainer.innerHTML = ''; // Clear previous numbers
        numbers.forEach(number => {
            const numberCircle = document.createElement('span');
            numberCircle.classList.add('number-circle');
            numberCircle.textContent = number;
            lotteryNumbersContainer.appendChild(numberCircle);
        });
    }

    function toggleTheme() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '라이트 모드 전환';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '다크 모드 전환';
        }
    }
});
