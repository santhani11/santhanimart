const email = localStorage.getItem("userEmail");
const orderList = document.getElementById("orderList");

if (!email) {

    orderList.innerHTML = `
        <p>Please login to view your orders.</p>
    `;

} else {

    fetch(`http://localhost:8080/api/orders/${email}`)
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to load orders");
            }

            return response.json();
        })
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

                            <h2>📦 Order #${order.id}</h2>

                            <p>
                                👤 <b>Customer:</b>
                                ${order.customerName}
                            </p>

                            <p>
                                📞 <b>Phone:</b>
                                ${order.phone}
                            </p>

                            <p>
                                📍 <b>Address:</b>
                                ${order.address}
                            </p>

                            <p>
                                🏙️ <b>City:</b>
                                ${order.city}
                            </p>

                            <p>
                                📮 <b>Pincode:</b>
                                ${order.pincode}
                            </p>

                            <p>
                                💰 <b>Total:</b>
                                ₹${order.totalAmount}
                            </p>

                            <p>
                                📦 <b>Status:</b>
                                ${order.status}
                            </p>

                        </div>

                    </div>
                `;
            });
        })
        .catch(error => {

            console.error("Order loading error:", error);

            orderList.innerHTML = `
                <p>Unable to load orders.</p>
            `;
        });
}

async function clearOrderHistory() {

    const email = localStorage.getItem("userEmail");

    if (!email) {
        alert("Please login first.");
        return;
    }

    const confirmClear = confirm(
        "Are you sure you want to clear your order history?"
    );

    if (!confirmClear) {
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:8080/api/orders/user/${email}`,
            {
                method: "DELETE"
            }
        );

        if (response.ok) {

            alert("🗑️ Order history cleared!");

            orderList.innerHTML = `
                <p>No orders found.</p>
            `;

        } else {

            alert("❌ Failed to clear order history.");

        }

    } catch (error) {

        console.error("Clear orders error:", error);

        alert("❌ Cannot connect to backend.");

    }
}