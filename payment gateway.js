// Set your publishable key from the Stripe dashboard
const stripe = Stripe('your-publishable-key-here');
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

// Handle form submission
const form = document.getElementById('checkoutForm');
const submitButton = document.getElementById('submit-btn');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // Disable the button to prevent multiple clicks
    submitButton.disabled = true;

    // Create a payment method
    const {token, error} = await stripe.createToken(card);

    if (error) {
        // Show error to the user
        document.getElementById('card-errors').textContent = error.message;
        submitButton.disabled = false;
    } else {
        // Send the token to your server for processing the payment
        // Replace 'your-backend-url' with your server URL
        fetch('your-backend-url/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token.id,
                name: document.getElementById('name').value,
                address: document.getElementById('address').value,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Handle successful payment
                alert("Payment Successful!");
                window.location.href = 'success.html'; // Redirect to success page
            } else {
                // Handle error from server
                alert("Payment failed, please try again.");
                submitButton.disabled = false;
            }
        })
        .catch(error => {
            console.error("Error processing payment:", error);
            alert("An error occurred. Please try again.");
            submitButton.disabled = false;
        });
    }
});
