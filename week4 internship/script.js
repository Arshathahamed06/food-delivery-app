const foodItems = [
  { name: "Margherita Pizza", price: 199, image: "./margeritha pizza.jpg" },
  { name: "Veg Burger", price: 99, image: "./veg burger.jpg" },
  { name: "Chocolate Cake", price: 149, image: "./chocolate cake.jpg" },
  { name: "Pasta Alfredo", price: 179, image: "./Pasta Alfredo.jpg" },
  { name: "Paneer Tikka", price: 159, image: "./Paneer Tikka.jpg" },
  { name: "Grilled Sandwich", price: 89, image: "./Grilled Sandwich.jpg" },
  { name: "French Fries", price: 79, image: "./French Fries.jpg" },
  { name: "Chicken Biryani", price: 219, image: "./Chicken Biryani.jpg" },
  { name: "Spring Rolls", price: 109, image: "./Spring Rolls.jpg" },
  { name: "Ice Cream Sundae", price: 129, image: "./Ice Cream Sundae.jpg" }
];


let cart = [];

const foodSection = document.getElementById("food-section");
const cartSection = document.getElementById("cart-section");
const cartItemsDiv = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

function renderFoodItems() {
  foodSection.innerHTML = "";
  foodItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    foodSection.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(foodItems[index]);
  cartCount.innerText = cart.length;
}

function showHome() {
  document.getElementById("hero").style.display = "block";
  foodSection.style.display = "flex";
  cartSection.style.display = "none";
}

function showCart() {
  document.getElementById("hero").style.display = "none";
  foodSection.style.display = "none";
  cartSection.style.display = "block";
  renderCart();
}

function renderCart() {
  cartItemsDiv.innerHTML = "";
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <strong>${item.name}</strong> - ₹${item.price}
    `;
    cartItemsDiv.appendChild(div);
  });
}

// Load items initially
renderFoodItems();
