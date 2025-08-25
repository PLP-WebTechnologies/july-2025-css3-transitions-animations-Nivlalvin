//Part 2: Functions with parameters, return values, scope 
// Global variable
let globalMessage = "Welcome to my demo!";

// Function with parameter + return value
function greetUser(name) {
  let localMessage = "Hello, " + name; 
  return globalMessage + " " + localMessage;
}

// Function that toggles a class (reusable for animations)
function toggleAnimation(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.toggle(className);
}

// Part 3: Combining CSS + JS 
// Modal controls
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  modal.classList.add("show");

  // Call function with parameter + show return value
  document.getElementById("greeting").textContent = greetUser("Alvin");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 500);
}
