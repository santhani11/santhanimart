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

                    <button>Add to Cart</button>

                </div>
            `;
        });
    })
    .catch(error => {
        document.getElementById("productList").innerHTML =
            "<p>Unable to load products.</p>";

        console.log(error);
    });
    