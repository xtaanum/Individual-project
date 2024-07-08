document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const usernameOrEmail = document.getElementById('name').value;
        const password = document.getElementById('number').value;

        // Simple validation check
        if (usernameOrEmail.trim() === '' || password.trim() === '') {
            alert('Please fill in both fields.');
            return;
        }

        if (password.length < 8 || password.length > 16) {
            alert('Password must be between 8 and 16 characters.');
            return;
        }

        // Normally, here you would send the data to the server
        console.log('Username or Email:', usernameOrEmail);
        console.log('Password:', password);

        // Simulating successful login
        alert('Login successful!');

        // Redirect to the main page
        window.location.href = 'codequiz.html';

        // Reset the form
        loginForm.reset();
    });
});
