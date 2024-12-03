function validateRegisterForm(event) {
    event.preventDefault(); 

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (fullname === "") {
        alert("Full Name is required.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    
    alert("Registration successful! Redirecting to home page...");
    window.location.href = "index.html";     
    return true;
}

function validateLoginForm(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password === "") {
        alert("Password is required.");
        return false;
    }
    alert("Login successful! Redirecting to home page...");
    window.location.href = "index.html";     
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validateContactForm(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Your Name is required.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Thank you for contacting us! We will get back to you shortly.");
    window.location.href = "index.html"; 
    return true;
}



document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function() {
        const cartItem = this.closest('.cart-item');
        cartItem.remove();
        updateTotal();
    });
});

document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('input', function() {
        updateTotal();
    });
});

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.item-details p').textContent.replace('Price: $', ''));
        const quantity = parseInt(item.querySelector('.quantity').value);
        total += price * quantity;
    });
    document.querySelector('.cart-summary h3').textContent = `Total: $${total.toFixed(2)}`;
}

updateTotal();




function toggleEditForm() {
    const editForm = document.getElementById("edit-form");
    editForm.style.display = editForm.style.display === "none" ? "block" : "none";
}
function updateProfile(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    console.log("Profile updated:", { fullname, email, phone, address });

    alert("Your profile has been updated successfully!");
    toggleEditForm();
}
