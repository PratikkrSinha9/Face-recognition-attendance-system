document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill out both fields.';
    } else {
        alert(`Logged in as ${username}`);
        // Add further login logic here (e.g., API calls)
    }
});

const modal = document.getElementById('forgot-password-modal');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const span = document.getElementsByClassName('close')[0];

forgotPasswordLink.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('reset-email').value;
    const resetErrorMessage = document.getElementById('reset-error-message');

    resetErrorMessage.textContent = '';

    if (email === '') {
        resetErrorMessage.textContent = 'Please enter your email address.';
    } else {
        alert(`Password reset link sent to ${email}`);
        modal.style.display = 'none';
        // Add further password reset logic here (e.g., API calls)
    }
});
