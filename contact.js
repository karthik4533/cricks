// Basic form validation for the Contact form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Simple validation checks
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all fields.");
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        // If all fields are valid, submit the form
        alert("Thank you for your message. We will get back to you soon!");
    }
});
