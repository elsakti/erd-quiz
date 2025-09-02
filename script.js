let currentQuestion = 0;
let selectedAnswers = {};
let quizCompleted = false;

// DOM elements
const questionCard = document.getElementById('questionCard');
const questionNumber = document.getElementById('questionNumber');
const questionType = document.getElementById('questionType');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const explanationContainer = document.getElementById('explanationContainer');
const explanationText = document.getElementById('explanationText');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const completionScreen = document.getElementById('completionScreen');

// Initialize quiz
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion(currentQuestion);
    updateProgress();
    updateNavigationButtons();
});

// Load a question
function loadQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    
    const question = questions[index];
    
    // Update question header
    questionNumber.textContent = `Question ${index + 1}`;
    questionType.textContent = question.type;
    
    // Update question text (both languages)
    questionText.innerHTML = `
        <div class="english">${question.question.english}</div>
        <div class="thai">${question.question.thai}</div>
    `;
    
    // Clear and load options
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.setAttribute('data-value', option.id);
        
        optionDiv.innerHTML = `
            <div class="option-label">${option.id.toUpperCase()})</div>
            <div class="option-text">
                <div class="english">${option.text.english}</div>
                <div class="thai">${option.text.thai}</div>
            </div>
        `;
        
        // Add click handler
        optionDiv.addEventListener('click', () => selectOption(option.id, question.correct));
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Hide explanation initially
    explanationContainer.style.display = 'none';
    
    // Restore previous selection if exists
    if (selectedAnswers[index]) {
        const selectedOption = selectedAnswers[index];
        showAnswer(selectedOption, question.correct);
    }
}

// Select an option
function selectOption(selectedId, correctId) {
    // Store the answer
    selectedAnswers[currentQuestion] = selectedId;
    
    // Show the answer
    showAnswer(selectedId, correctId);
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Show answer and explanation
function showAnswer(selectedId, correctId) {
    const options = document.querySelectorAll('.option');
    
    // Reset all option styles
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Apply appropriate styles
    options.forEach(option => {
        const optionValue = option.getAttribute('data-value');
        
        if (optionValue === correctId) {
            option.classList.add('correct');
        } else if (optionValue === selectedId && selectedId !== correctId) {
            option.classList.add('incorrect');
        }
        
        if (optionValue === selectedId) {
            option.classList.add('selected');
        }
    });
    
    // Show explanation
    const question = questions[currentQuestion];
    explanationText.innerHTML = `
        <div class="english">${question.explanation.english}</div>
        <div class="thai" style="margin-top: 10px; font-size: 0.95em; opacity: 0.9;">${question.explanation.thai}</div>
    `;
    explanationContainer.style.display = 'block';
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

// Update navigation buttons
function updateNavigationButtons() {
    // Previous button
    prevBtn.disabled = currentQuestion === 0;
    
    // Next/Finish button
    const hasAnswer = selectedAnswers[currentQuestion] !== undefined;
    const isLastQuestion = currentQuestion === questions.length - 1;
    
    if (isLastQuestion) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = hasAnswer ? 'inline-block' : 'none';
    } else {
        nextBtn.style.display = hasAnswer ? 'inline-block' : 'none';
        finishBtn.style.display = 'none';
        nextBtn.disabled = !hasAnswer;
    }
}

// Go to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
        updateProgress();
        updateNavigationButtons();
        
        // Smooth scroll to top
        questionCard.scrollIntoView({ behavior: 'smooth' });
    }
}

// Go to next question
function nextQuestion() {
    if (currentQuestion < questions.length - 1 && selectedAnswers[currentQuestion] !== undefined) {
        currentQuestion++;
        loadQuestion(currentQuestion);
        updateProgress();
        updateNavigationButtons();
        
        // Smooth scroll to top
        questionCard.scrollIntoView({ behavior: 'smooth' });
    }
}

// Finish quiz
function finishQuiz() {
    if (selectedAnswers[currentQuestion] !== undefined) {
        quizCompleted = true;
        showCompletionScreen();
    }
}

// Show completion screen
function showCompletionScreen() {
    completionScreen.style.display = 'flex';
    
    // Add animation
    const completionContent = completionScreen.querySelector('.completion-content');
    completionContent.style.animation = 'fadeIn 0.5s ease';
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    selectedAnswers = {};
    quizCompleted = false;
    
    completionScreen.style.display = 'none';
    loadQuestion(currentQuestion);
    updateProgress();
    updateNavigationButtons();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (completionScreen.style.display === 'flex') return;
    
    switch(event.key) {
        case 'ArrowLeft':
            if (!prevBtn.disabled) {
                previousQuestion();
            }
            break;
        case 'ArrowRight':
            if (!nextBtn.disabled && nextBtn.style.display !== 'none') {
                nextQuestion();
            } else if (finishBtn.style.display !== 'none') {
                finishQuiz();
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const optionIndex = parseInt(event.key) - 1;
            const question = questions[currentQuestion];
            if (question && question.options[optionIndex] && !selectedAnswers[currentQuestion]) {
                selectOption(question.options[optionIndex].id, question.correct);
            }
            break;
        case 'a':
        case 'b':
        case 'c':
        case 'd':
            if (!selectedAnswers[currentQuestion]) {
                const question = questions[currentQuestion];
                const option = question.options.find(opt => opt.id === event.key.toLowerCase());
                if (option) {
                    selectOption(option.id, question.correct);
                }
            }
            break;
    }
});

// Add visual feedback for keyboard users
document.addEventListener('keydown', function(event) {
    if (['1', '2', '3', '4', 'a', 'b', 'c', 'd'].includes(event.key.toLowerCase())) {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.style.transform = 'scale(0.98)';
            setTimeout(() => {
                option.style.transform = '';
            }, 100);
        });
    }
});

// Touch/swipe support for mobile
let touchStartX = null;
let touchStartY = null;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Check if it's a horizontal swipe (not vertical scroll)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && !prevBtn.disabled) {
            // Swipe right - go to previous
            previousQuestion();
        } else if (deltaX < 0) {
            // Swipe left - go to next or finish
            if (!nextBtn.disabled && nextBtn.style.display !== 'none') {
                nextQuestion();
            } else if (finishBtn.style.display !== 'none') {
                finishQuiz();
            }
        }
    }
    
    touchStartX = null;
    touchStartY = null;
});

// Prevent zooming on double tap for better mobile experience
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Set initial body opacity for loading effect
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';
