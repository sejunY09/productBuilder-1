document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const lotteryNumbersContainer = document.getElementById('lotteryNumbers');

    generateButton.addEventListener('click', generateLotteryNumbers);

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

    // Initial display of empty circles with '?'
    // This is already handled by index.html, but this function can be used to reset
    // if needed. For initial load, the HTML already has the '?' circles.
});
