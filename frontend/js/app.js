// SanthaniMart Frontend
console.log("SanthaniMart frontend loaded.");

// Registration
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

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

        message.textContent =
            "Registration form is valid. Backend connection will be added next.";

        console.log({
            name: name,
            email: email,
            password: password,
            role: role
        });
    });
}


// Login
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("loginMessage");

        if (!email || !password) {
            message.textContent =
                "Please enter your email and password.";
            return;
        }

        message.textContent =
            "Login form is valid. Backend connection will be added next.";

        console.log({
            email: email,
            password: password
        });
    });
}