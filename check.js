// Sample Cart Data (for demonstration)
let cart = [
    { name: "Cricket Bat", price: 50, quantity: 1 },
    { name: "Cricket Ball", price: 25, quantity: 2 },
    { name: "Cricket Helmet", price: 30, quantity: 1 }
];

// Function to populate the cart table and calculate the total
function populateCart() {
    const cartItemsTable = document.getElementById("cart-items").getElementsByTagName("tbody")[0];
    let cartTotal = 0;

    // Clear the existing table rows
    cartItemsTable.innerHTML = "";

    // Add each item to the cart table
    cart.forEach(item => {
        const row = cartItemsTable.insertRow();
        const cellName = row.insertCell(0);
        const cellPrice = row.insertCell(1);
        const cellQuantity = row.insertCell(2);
        const cellTotal = row.insertCell(3);

        cellName.innerText = item.name;
        cellPrice.innerText = `$${item.price}`;
        cellQuantity.innerText = item.quantity;
        cellTotal.innerText = `$${item.price * item.quantity}`;

        cartTotal += item.price * item.quantity;
    });

    // Display the total price
    const totalElement = document.getElementById("cart-total");
    totalElement.innerText = `Total: $${cartTotal}`;
}

// Function to handle the checkout process
function handleCheckout() {
    const fullName = document.getElementById("full-name").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postalCode = document.getElementById("postal-code").value;
    const country = document.getElementById("country").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    if (!fullName || !address || !city || !postalCode || !country || !cardNumber || !expiryDate || !cvv) {
        alert("Please fill out all fields.");
        return;
    }

    alert("Order placed successfully!\nThank you for shopping with us!");
    // You can add functionality to process the payment here (e.g., integrating with a payment gateway)
}

// Event Listener for "Place Order" button
document.getElementById("place-order").addEventListener("click", handleCheckout);

// Populate the cart on page load
populateCart();
