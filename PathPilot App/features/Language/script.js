document.addEventListener('DOMContentLoaded', function () {
    var languageDropdown = document.getElementById('languageDropdown');

    // Function to change the language based on user selection
    function changeLanguage() {
        var selectedLanguage = languageDropdown.value;

        // Hide all elements with the 'data-lang' attribute
        var langElements = document.querySelectorAll('[data-lang]');
        langElements.forEach(function (element) {
            element.style.display = 'none';
        });

        // Show the element corresponding to the selected language
        var selectedLangElement = document.querySelector('[data-lang="' + selectedLanguage + '"]');
        if (selectedLangElement) {
            selectedLangElement.style.display = 'block';
        }
    }

    // Event listener for the language dropdown change event
    languageDropdown.addEventListener('change', changeLanguage);

    // Initial language setup
    changeLanguage();
});
    