document.addEventListener('DOMContentLoaded', function () {
    var notificationCenter = document.getElementById('notificationCenter');
    var triggerNotificationButton = document.getElementById('triggerNotification');

    // Function to add a notification to the notification center
    function addNotification(message) {
        var notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        notificationCenter.appendChild(notification);

        // Automatically remove the notification after a few seconds
        setTimeout(function () {
            notificationCenter.removeChild(notification);
        }, 5000); // Adjust the time as needed
    }

    // Event listener for the example button to trigger a notification
    triggerNotificationButton.addEventListener('click', function () {
        addNotification('This is a notification message.');
    });

    // You can use the addNotification function in response to different events in your application
});
