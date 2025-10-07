// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('login-form');

//     // Handle form submission for login
//     loginForm.addEventListener('submit', (event) => {
//         // Prevent the default form submission that reloads the page
//         event.preventDefault();

//         // Perform any client-side validation here
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;

//         // Basic validation: check if fields are not empty
//         if (username.trim() === '' || password.trim() === '') {
//             alert('Please enter your username and password.');
//             return;
//         }

//         // Redirect to the dashboard page
//         window.location.href = 'adminhome.html';
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the values the user entered
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Hardcoded credentials for demonstration
        const correctUsername = 'admin';
        const correctPassword = 'password123';

        // Check if the entered credentials match
        if (username === correctUsername && password === correctPassword) {
            alert('Login successful! Redirecting to dashboard.');
            window.location.href = 'adminhome.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});