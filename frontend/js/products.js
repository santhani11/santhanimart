const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");

fetch("https://santhanimart.onrender.com/api/products")
    .then(response => response.json())
    .then(products => {

        let list = document.getElementById("productList");

        list.innerHTML = "";

        let filteredProducts = products;

        if (selectedCategory) {

            filteredProducts = products.filter(
                product =>
                    product.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
            );
        }

        if (filteredProducts.length === 0) {

            list.innerHTML = `
                <p>No products found in ${selectedCategory} category.</p>
            `;

            return;
        }

        filteredProducts.forEach(product => {

            list.innerHTML += `
                <div class="product-card">

                    <img src="${product.image}" alt="${product.name}">

                    <h3>${product.name}</h3>

                    <p>${product.description}</p>

                    <h4>₹${product.price}</h4>

                    <p>Category: ${product.category}</p>

                    <p>Stock: ${product.stock}</p>

                    <button onclick='addToCart(${JSON.stringify(product)})'>
                        🛒 Add to Cart
                    </button>

                    ${localStorage.getItem("userRole") === "ADMIN" ? `

    <div style="margin-top:15px;">

        <button onclick="changeStock(${product.id}, -1)">
            ➖ Stock
        </button>

        <button onclick="changeStock(${product.id}, 1)">
            ➕ Stock
        </button>

        <button onclick="deleteProduct(${product.id})">
            🗑️ Remove
        </button>

    </div>

` : ""}
                </div>
            `;
        });
    })
    .catch(error => {

        document.getElementById("productList").innerHTML =
            "<p>Unable to load products.</p>";

        console.log(error);
    });

async function addToCart(product) {

    try {

        const response = await fetch(
            `https://santhanimart.onrender.com/api/products/${product.id}/decrease-stock`,
            {
                method: "PUT"
            }
        );

        const message = await response.text();

        if (!response.ok) {
            alert("❌ " + message);
            return;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existingProduct = cart.find(
            item => item.id === product.id
        );

        if (existingProduct) {

            existingProduct.quantity += 1;

        } else {

            product.quantity = 1;
            cart.push(product);

        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("🛒 " + product.name + " added to cart!");

        location.reload();

    } catch (error) {

        console.error("Stock update error:", error);

        alert("❌ Cannot update stock. Please start Spring Boot.");

    }
}
async function changeStock(id, amount) {

    const action = amount === 1
        ? "increase-stock"
        : "decrease-stock";

    try {

        const response = await fetch(
            `https://santhanimart.onrender.com/api/products/${id}/${action}`,
            {
                method: "PUT"
            }
        );

        const message = await response.text();

        if (!response.ok) {
            alert("❌ " + message);
            return;
        }

        location.reload();

    } catch (error) {

        console.error(error);
        alert("❌ Cannot update stock.");

    }
}

async function deleteProduct(id) {

    const confirmDelete =
        confirm("Are you sure you want to remove this product?");

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch(
            `https://santhanimart.onrender.com/api/products/${id}`,
            {
                method: "DELETE"
            }
        );

        const message = await response.text();

        if (!response.ok) {
            alert("❌ " + message);
            return;
        }

        alert("🗑️ Product removed successfully!");

        location.reload();

    } catch (error) {

        console.error(error);
        alert("❌ Cannot remove product.");

    }
}
