const restaurantName = "Spooky Bites";
let isOpen = true;

function toggleStatus() {
    isOpen= !isOpen;
    displayStatus();
}

let customerName = "";
let mealPrice = 0;
let quantity = 1;
let total = 0;

const prices = {
    "Spider Pizza": 150,
    "Pumpkin Pasta": 180,
    "Ghost Burger": 120,
};

const status = document.getElementById("status");
const result = document.getElementById("result");

function displayStatus() {
    status.textContent = isOpen
    ? "We are OPEN!"
    : "We are CLOSED!";
}

function getRecommendation(total) {
    if (total >= 300) {
        return "🎃 Try our Halloween Party Combo!";
    } else {
        return "👻 Add another spooky treat!";
    }
}

function placeOrder() {
    customerName = document.getElementById("customer") .value.trim();
    const selectedMeal = document.getElementById("meal").value;
    quantity = Number(document.getElementById("quantity").value);

    if (!customerName) {
        result.textContent = "Please enter your name first!";
        return;
    }
    
    if(!Number.isInteger(quantity) || quantity < 1) {
        result.textContent = "Please enter a valid quantity.";
        return;
    }

    if (!isOpen) {
        result.textContent = "Sorry! The restaurant is closed.";
        return;
    }

    mealPrice = prices[selectedMeal];
    total = mealPrice * quantity;
    
    const confirmed = confirm("Confirm your order of " + quantity + " " + selectedMeal + "(s), worth ₱" + total + "?");
    if (!confirmed) {
        result.textContent = "Your order was cancelled."
        return;
    }

    let discount = 0;

    if (total >= 300) {
        discount = total * 0.10;
    }
    
    const finalTotal = total - discount;
    const recommendation = getRecommendation(total);
    result.textContent =
    "Thank you, " + customerName + "! " +
        "Meal: " + selectedMeal + " | " +
        "Quantity: " + quantity + " | " +
        "Original Total: ₱" + total + " | " +
        "Discount: ₱" + discount + " | " +
        "Final Total: ₱" + finalTotal + " | " +
        recommendation;
}

function showMenuMessage() {
    alert("Welcome to " + restaurantName + "! Choose your spooky meal.");
}
function showSpookyMessage() {
    customerName = document.getElementById("customer").value.trim();

    if (!customerName) {
        alert("Please enter your name first!");
        return;
    }
    alert("Boo, " + customerName + "! Welcome to " + restaurantName + "!")
}
displayStatus();

document.getElementById("toggleBtn")
    .addEventListener("click", toggleStatus);

document.getElementById("orderBtn")
    .addEventListener("click", placeOrder);

document.querySelector('a[href="#menu"]')
    .addEventListener("click", showMenuMessage);

document.getElementById("spookyGreetBtn")
    .addEventListener("click", showSpookyMessage);