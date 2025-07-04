// Search and Filter Logic
function searchProducts() {
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    var products = document.querySelectorAll(".product");

    products.forEach(function (product) {
        var productName = product.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function filterProducts() {
    var selectedCategory = document.getElementById("categoryFilter").value.toLowerCase();
    var priceLimit = document.getElementById("priceFilter").value;
    document.getElementById("priceValue").textContent = "$" + priceLimit;

    var products = document.querySelectorAll(".product");

    products.forEach(function (product) {
        var productCategory = product.getAttribute("data-category").toLowerCase();
        var productPrice = parseFloat(product.getAttribute("data-price"));

        if ((selectedCategory === "" || productCategory === selectedCategory) && productPrice <= priceLimit) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
