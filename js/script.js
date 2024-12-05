// Theme Toggle
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
});

// Code Editor (using Ace editor)
const editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
editor.session.setMode('ace/mode/javascript');

// Timer (Countdown Timer)
let timeRemaining = 900; // 15 minutes in seconds
const timerDisplay = document.getElementById('timer');

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (timeRemaining > 0) {
        timeRemaining--;
    }
}
setInterval(updateTimer, 1000);

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Send Message (Chat)
const sendMsgBtn = document.getElementById('sendMsg');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

sendMsgBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('text-gray-700', 'dark:text-gray-300');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
    }
});

// Example run and submit button actions
document.getElementById('testBtn').addEventListener('click', () => {
    showToast("Code is running...");
    // Add code execution logic here
});

document.getElementById('submitBtn').addEventListener('click', () => {
    showToast("Code submitted successfully!");
    // Add code submission logic here
});
