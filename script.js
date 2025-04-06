// This script updates a counter when the Enter, Exit, or Reset button is clicked.

// Using `let` because the count will change as the buttons are clicked.
let count = 0;

// Selecting the buttons and display elements from the HTML.
const increaseButton = document.getElementById('increase'); // `const` because the button reference won't change.
const decreaseButton = document.getElementById('decrease'); // `const` because the button reference won't change.
const resetButton = document.getElementById('reset'); // `const` because the button reference won't change.
const display = document.getElementById('count'); // `const` because the display reference won't change.

// Function to increase the count and update the display.
increaseButton.addEventListener('click', function () {
  count++; // Increment the count by 1.
  display.textContent = count; // Update the display with the new count.
});

// Function to decrease the count and update the display.
decreaseButton.addEventListener('click', function () {
  if (count > 0) { // Check if the count is greater than 0.
    count--; // Decrement the count by 1.
    display.textContent = count; // Update the display with the new count.
  }
});

// Function to reset the count and update the display.
resetButton.addEventListener('click', function () {
  count = 0; // Reset the count to 0.
  display.textContent = count; // Update the display with the new count.
});