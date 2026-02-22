document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const lotteryNumbersContainer = document.getElementById('lotteryNumbers');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const authSection = document.getElementById('auth-section');
    const userInfo = document.getElementById('user-info');
    const userNameSpan = document.getElementById('userName');
    const logoutButton = document.getElementById('logoutButton');
    const loginButtons = document.getElementById('login-buttons');
    const generalLoginButton = document.getElementById('generalLogin');
    const googleLoginButton = document.getElementById('googleLogin');
    const kakaoLoginButton = document.getElementById('kakaoLogin');
    const naverLoginButton = document.getElementById('naverLogin');

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

    // --- Authentication Logic (Frontend UI only) ---
    generalLoginButton.addEventListener('click', () => simulateLogin('사용자')); // Simulate login for a generic user
    logoutButton.addEventListener('click', simulateLogout);

    googleLoginButton.addEventListener('click', () => alert('Google 로그인 흐름 시작 (백엔드 필요)'));
    kakaoLoginButton.addEventListener('click', () => alert('카카오 로그인 흐름 시작 (백엔드 필요)'));
    naverLoginButton.addEventListener('click', () => alert('네이버 로그인 흐름 시작 (백엔드 필요)'));

    function simulateLogin(username) {
        userInfo.style.display = 'flex'; // Show user info
        userNameSpan.textContent = `안녕하세요, ${username}님!`;
        loginButtons.style.display = 'none'; // Hide login buttons
    }

    function simulateLogout() {
        userInfo.style.display = 'none'; // Hide user info
        loginButtons.style.display = 'flex'; // Show login buttons
        alert('로그아웃되었습니다.');
    }
    // --- End Authentication Logic ---

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

            if (number >= 1 && number <= 10) {
                numberCircle.classList.add('color-1-10');
            } else if (number >= 11 && number <= 20) {
                numberCircle.classList.add('color-11-20');
            } else if (number >= 21 && number <= 30) {
                numberCircle.classList.add('color-21-30');
            } else if (number >= 31 && number <= 40) {
                numberCircle.classList.add('color-31-40');
            } else if (number >= 41 && number <= 45) {
                numberCircle.classList.add('color-41-45');
            }
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
