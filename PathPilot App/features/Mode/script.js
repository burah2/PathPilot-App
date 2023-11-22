document.addEventListener('DOMContentLoaded', function () {
    var darkModeToggle = document.getElementById('darkModeToggle');
    var body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
    }

    // Event listener for the dark mode toggle button click event
    darkModeToggle.addEventListener('click', toggleDarkMode);
});
