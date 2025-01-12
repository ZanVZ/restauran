// Harga makanan
const dishPrices = {
    "salmon sushi": 8.99,
    "crunchy roll": 9.99,
    "baked ebi": 8.44,
    "beef ramen": 8.55,
    "curry chicken": 9.66,
    "spicy tuna": 9.11,
    "tamago sushi": 8.88,
    "spaghetti sauce": 6.35,
    "mint lychee": 7.1,
    "lemon tea": 7.2,
    "blue mojito": 7.3,
    "strawberry mojito": 7.4,
    "kiwi mojito": 7.5,
    "jus jeruk": 7.7,
    "Sop buah": 7.8,
    "es teler": 7.6,
};

// Open the modal
function openOrderPopup(dishName) {
    const price = dishPrices[dishName.toLowerCase()];
    document.getElementById("dishName").textContent = `Kamu Memesan: ${dishName}`;
    document.getElementById("totalPrice").textContent = price.toFixed(2); // Set initial price
    document.getElementById("quantity").value = 1; // Reset quantity
    document.getElementById("orderModal").style.display = "flex";

    // Update total price when quantity changes
    document.getElementById("quantity").addEventListener("input", function () {
        const quantity = parseInt(this.value, 10) || 1;
        document.getElementById("totalPrice").textContent = (price * quantity).toFixed(2);
    });
}

// Close the modal
function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
}

// Handle form submission
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh
    const dishName = document.getElementById("dishName").textContent;
    const quantity = document.getElementById("quantity").value;
    const totalPrice = document.getElementById("totalPrice").textContent;
    alert(`Order confirmed!\n${dishName}\nQuantity: ${quantity}\nTotal Price: $${totalPrice}`);
    closeOrderModal();
});
