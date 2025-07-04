// Function to filter products based on search and filter options
function filterProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const categorySelect = document.getElementById('category').value;
    const priceSelect = document.getElementById('price').value;
    const availabilitySelect = document.getElementById('availability').value;

    const products = document.querySelectorAll('.product-card');

    products.forEach((product) => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        const productCategory = product.getAttribute('data-category');
        const productPrice = parseFloat(product.getAttribute('data-price'));
        const productAvailability = product.getAttribute('data-availability');

        // Check if product matches search term
        const matchesSearch = productName.includes(searchInput);

        // Filter by category
        const matchesCategory = categorySelect === '' || productCategory === categorySelect;

        // Filter by price range
        let matchesPrice = true;
        if (priceSelect) {
            const [minPrice, maxPrice] = priceSelect.split('-').map(Number);
            matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;
        }

        // Filter by availability
        const matchesAvailability = availabilitySelect === '' || productAvailability === availabilitySelect;

        // Show or hide product based on filters
        if (matchesSearch && matchesCategory && matchesPrice && matchesAvailability) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
