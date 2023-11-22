// Common JavaScript code goes here
document.addEventListener('DOMContentLoaded', function () {
    // Add common JavaScript logic here
});

// Include other JavaScript files as needed
// Include authentication feature JavaScript
import('./features/authentication.js');
// Include Google Sign-In feature JavaScript
import('./features/google-signin.js');
// Include dropdown menu feature JavaScript
import('./features/dropdown-menu.js');


document.addEventListener('DOMContentLoaded', function () {
    // Get the home button element
    var homeButton = document.getElementById('homeButton');

    // Add a click event listener to the home button
    homeButton.addEventListener('click', function () {
        // Replace this with the action you want to perform when the home button is clicked
        alert('Home button clicked!');
    });
});

// Inside your onSignIn or authentication success callback
window.location.href = "/dashboard"; // Redirect to the dashboard or any other page
