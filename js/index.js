// Get the input, image, and alert elements
const emailBorder = document.getElementById('emailInput')
const emailInput = document.getElementById('email4');
const alertMessage = document.getElementById('alert');
const img = document.getElementById('img');

// Function to validate email
function validateEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to handle input event
function handleInput() {
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        // Valid email
        emailBorder.style.borderColor = ''; // Reset border color
        alertMessage.textContent = ''; // Clear error message
        img.src = './img/question.png'; // Change image source to question.png
    } else {
        // Invalid email
        emailBorder.style.borderColor = 'var(--alert)'; 
        alertMessage.textContent = 'The email is invalid.';
        img.src = './img/question-alert.png';
    }
}

// Add event listener for input event
emailInput.addEventListener('input', handleInput);
