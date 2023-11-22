document.addEventListener('DOMContentLoaded', function () {
    var profileForm = document.getElementById('profileForm');

    profileForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input values
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Send the user profile data to the server
        fetch('http://localhost:3000/create-profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // You can redirect or perform other actions after a successful profile creation
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
