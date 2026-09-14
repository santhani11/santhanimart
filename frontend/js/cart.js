// SanthaniMart Cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");

function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>🛒 Your Cart is Empty</h2>
                <p>Add some products to your cart!</p>
                <a href="products.html" class="btn">
                    Continue Shopping
                </a>
            </div>
        `;

        return;
    }

    let total = 0;

    cart.forEach((product, index) => {

        const quantity = product.quantity || 1;
        const itemTotal = product.price * quantity;

        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${product.image}" 
                     alt="${product.name}"
                     width="100">

                <div class="cart-details">

                    <h3>${product.name}</h3>

                    <p>${product.description}</p>

                    <p>Price: ₹${product.price}</p>

                    <div class="quantity-controls">

                        <button onclick="decreaseQuantity(${index})">
                            −
                        </button>

                        <span>${quantity}</span>

                        <button onclick="increaseQuantity(${index})">
                            +
                        </button>

                    </div>

                    <p>
                        Item Total: ₹${itemTotal}
                    </p>

                    <button onclick="removeFromCart(${index})">
                        🗑️ Remove
                    </button>

                </div>

            </div>
        `;
    });

    cartItems.innerHTML += `
        <div class="cart-summary">

            <h2>Cart Summary</h2>

            <h3>Total: ₹${total}</h3>

            <button onclick="checkout()">
                Proceed to Checkout
            </button>

        </div>
    `;
}


function increaseQuantity(index) {

    cart[index].quantity += 1;

    saveCart();
}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity -= 1;

    } else {

        cart.splice(index, 1);
    }

    saveCart();
}

async function removeFromCart(index) {

    const product = cart[index];

    const quantity = product.quantity || 1;

    try {

        for (let i = 0; i < quantity; i++) {

            const response = await fetch(
                `http://localhost:8080/api/products/${product.id}/increase-stock`,
                {
                    method: "PUT"
                }
            );

            if (!response.ok) {
                alert("❌ Could not restore stock.");
                return;
            }
        }

        cart.splice(index, 1);

        saveCart();

        alert("🗑️ Product removed and stock restored!");

    } catch (error) {

        console.error("Stock restore error:", error);

        alert("❌ Cannot restore stock. Please start Spring Boot.");
    }
}


function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


function checkout() {

    alert("Checkout feature coming soon! 🛒");

}


displayCart();