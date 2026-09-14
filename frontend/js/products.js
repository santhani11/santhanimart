fetch("http://localhost:8080/api/products")
    .then(response => response.json())
    .then(products => {

        let list = document.getElementById("productList");

        list.innerHTML = "";

        products.forEach(product => {

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
            `http://localhost:8080/api/products/${product.id}/decrease-stock`,
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