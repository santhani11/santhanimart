// SanthaniMart Frontend
console.log("SanthaniMart frontend loaded.");
// Registration
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;
        const role = document.getElementById("role").value;

        const message = document.getElementById("registerMessage");

        if (password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
            return;
        }

        if (!role) {
            message.textContent = "Please select a role.";
            return;
        }

        message.textContent = "Creating account...";

        try {

            const response = await fetch(
                "http://localhost:8080/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        role: role
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                message.textContent =
                    "Registration successful!";

                console.log("Registration successful:", data);

                registerForm.reset();

            } else {

                message.textContent =
                    data.message || "Registration failed.";

            }

        } catch (error) {

            console.error("Registration error:", error);

            message.textContent =
                "Cannot connect to backend. Please start Spring Boot.";

        }
    });
}

// Login
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("loginMessage");

        if (!email || !password) {
            message.textContent =
                "Please enter your email and password.";
            return;
        }

        message.textContent = "Logging in...";

        try {

            const response = await fetch(
                "http://localhost:8080/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();
if (response.ok) {

    message.textContent =
        "Login successful! Welcome " + data.name;

    console.log("Login successful:", data);
    localStorage.setItem("loggedIn", "true");
localStorage.setItem("userName", data.name);

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 1000);

} else {

    message.textContent =
        data.message || "Invalid email or password.";

}

        } catch (error) {

            console.error("Login error:", error);

            message.textContent =
                "Cannot connect to backend. Please start Spring Boot.";

        }
    });
}

const navAuth = document.getElementById("navAuth");

if (navAuth) {

    const loggedIn = localStorage.getItem("loggedIn");
    const userName = localStorage.getItem("userName");

    if (loggedIn === "true") {

        navAuth.innerHTML = `
            <span>Welcome, ${userName}</span>
            <a href="#" id="logoutBtn">Sign Out</a>
        `;

        document.getElementById("logoutBtn").addEventListener("click", function (event) {

            event.preventDefault();

            localStorage.removeItem("loggedIn");
            localStorage.removeItem("userName");

            window.location.href = "index.html";
        });
    }
}