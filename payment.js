// Handle the form submission
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    const cardName = document.getElementById("card-name").value.trim();
    const cardNumber = document.getElementById("card-number").value.trim();
    const expiryDate = document.getElementById("expiry-date").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const terms = document.getElementById("terms").checked;

    // Basic validation
    if (!cardName || !cardNumber || !expiryDate || !cvv || !terms) {
        alert("Please fill in all fields and agree to the terms and conditions.");
        return;
    }

    // Here you can add additional checks for the card number, CVV, and expiry date

    alert("Payment successful! Redirecting to confirmation page...");

    // Redirect to a confirmation page or another action
    // window.location.href = "confirmation.html";  // Uncomment to redirect
});
