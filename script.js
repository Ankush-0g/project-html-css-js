document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Example validation (you can replace this with actual authentication logic)
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        errorMessage.textContent = "";
        // Redirect to another page
        window.location.href = "dashboard.html"; // Change to actual page
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});