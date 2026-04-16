// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Stop the form from actually submitting

        const nameInput = document.getElementById('name');
        const userName = nameInput.value.trim();

        if (userName === "") {
            messageDiv.innerHTML = "<p style='color:red;'>Please enter your name.</p>";
            return;
        }

        // Display personalized message
        messageDiv.innerHTML = `<p style='color:green; font-weight:bold;'>Thank you, ${userName}! You have registered.</p>`;
    });
});
