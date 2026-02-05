// Moon phase calculation (simplified approximation)
function getMoonPhase(date) {
    const phases = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
    const images = [
        'https://cdn-icons-png.flaticon.com/512/1694/1694472.png',
        'https://cdn-icons-png.flaticon.com/512/1694/1694473.png',
        'https://cdn-icons-png.flaticon.com/512/1694/1694474.png',
        'https://cdn-icons-png.flaticon.com/512/1694/1694475.png',
        'https://cdn-icons-png.flaticon.com/512/1694/1694476.png',
        'https://cdn-icons-png.flaticon.com/512/1694/1694477.png',
        'https://cdn-icons-png.flaticon.com/512/1694/1694478.png',
        'https://cdn-icons-png.flaticon.com/512/1694/1694479.png'
    ];
    const knownNewMoon = new Date(2000, 0, 6); // Approximate known new moon
    const daysSince = (date - knownNewMoon) / (1000 * 60 * 60 * 24);
    const phaseIndex = Math.floor((daysSince % 29.53) / (29.53 / 8));
    return { name: phases[phaseIndex], image: images[phaseIndex] };
}

// Display current phase on home page
window.onload = function() {
    const today = new Date();
    const phase = getMoonPhase(today);
    document.getElementById('phase-name').textContent = phase.name;
    document.getElementById('phase-image').src = phase.image;
    document.getElementById('phase-date').textContent = `Date: ${today.toDateString()}`;
};

// Calculator function
function calculatePhase() {
    const dateInput = document.getElementById('date-input').value;
    if (!dateInput) return;
    const date = new Date(dateInput);
    const phase = getMoonPhase(date);
    document.getElementById('calc-phase').textContent = `${phase.name} on ${date.toDateString()}`;
    document.getElementById('calc-image').src = phase.image;
}

// Quiz function
function submitQuiz() {
    const answers = {
        q1: 'Full Moon',
        q2: '8',
        q3: 'Full Moon'
    };
    let score = 0;
    for (let q in answers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) score++;
    }
    document.getElementById('score-value').textContent = score;
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('score').style.display = 'block';
}