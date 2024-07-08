
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;
    const terms = document.getElementById('terms').checked;
    
    if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (!terms) {
        alert('You must agree to the terms and conditions!');
        return;
    }
    
    alert('Registration successful!');
    window.location.href = 'landing.html';
});