const email = localStorage.getItem("userEmail");
const orderList = document.getElementById("orderList");

if (!email) {

    orderList.innerHTML = `
        <p>Please login to view your orders.</p>
    `;

} else {

         fetch(`http://localhost:8080/api/orders/${email}`)
        .then(response => response.json())
        .then(orders => {

            if (orders.length === 0) {

                orderList.innerHTML = `
                    <p>No orders found.</p>
                `;

                return;
            }

            orderList.innerHTML = "";

            orders.forEach(order => {

                orderList.innerHTML += `
                    <div class="cart-item">

                        <div class="cart-details">

                            <h3>📦 Order #${order.id}</h3>

                            <p>
                                Customer: ${order.customerName}
                            </p>

                            <p>
                                Total: ₹${order.totalAmount}
                            </p>

                            <p>
                                Status: ${order.status}
                            </p>

                        </div>

                    </div>
                `;
            });
        })
        .catch(error => {

            console.error(error);

            orderList.innerHTML =
                "<p>Unable to load orders.</p>";
        });
}