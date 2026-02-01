const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// 1. The "No" Button Logic (Run Away)
// We use 'mouseover' so it moves before they can click it
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton); // For mobile support

function moveButton() {
    // Get the viewport dimensions
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

    // Calculate a random position
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // Apply the new position
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// 2. The "Yes" Button Logic (Success & Confetti)
yesBtn.addEventListener('click', () => {
    // Hide the question, show the success
    questionScreen.style.display = 'none';
    successScreen.classList.remove('hidden');

    // Trigger Confetti
    launchConfetti();
});

// Confetti Effect Function
function launchConfetti() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
