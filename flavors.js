
const flavorPrices = {
    "Decadent": 300,
    "Madagascar": 250,
    "Berry Delight": 275,
    "Mint Chip": 290,
    "Cookie Crumble": 320,
    "Pistachio": 350,
    "Butterscotch": 280,
    "Heavenly Hash": 330,
    "Mango": 240,
    "Matcha Tea": 360
};


let cart = [];


function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

function showPopup(flavorName, flavorPrice) {
    const popup = document.createElement("div");
    popup.className = "popup";

   
    popup.innerHTML = `
        <div class="popup-content">
            <h3>${flavorName}</h3>
            <p>Price: Rs. ${flavorPrice}</p>
            <button id="add-to-cart">Add to Cart</button>
            <button id="close-popup">Close</button>
        </div>
    `;

   
    popup.querySelector("#add-to-cart").addEventListener("click", () => {
        cart.push({ name: flavorName, price: flavorPrice });
        updateCartCount();
        document.body.removeChild(popup);
        alert(`${flavorName} added to cart!`);
    });

    
    popup.querySelector("#close-popup").addEventListener("click", () => {
        document.body.removeChild(popup);
    });

    document.body.appendChild(popup);
}

document.querySelectorAll(".flavor").forEach(flavor => {
    const flavorName = flavor.querySelector("h3").textContent.trim();
    const flavorPrice = flavorPrices[flavorName];

    flavor.addEventListener("click", () => {
        showPopup(flavorName, flavorPrice);
    });
});


const cartButton = document.createElement("div");
cartButton.className = "cart-button";
cartButton.innerHTML = `
    <button id="view-cart">Cart (<span id="cart-count">0</span>)</button>
`;
document.body.appendChild(cartButton);


cartButton.querySelector("#view-cart").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let cartDetails = "Your Cart:\n";
    let total = 0;
    cart.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.name} - Rs. ${item.price}\n`;
        total += item.price;
    });
    cartDetails += `\nTotal: Rs. ${total}`;
    alert(cartDetails);
});
