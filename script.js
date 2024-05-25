// Get the input element
const emailInput = document.getElementById("email");

// Get the subscribe button
const subscribeButton = document.getElementById("subscribeButton");

// Get success message button
const dismissButton = document.querySelector("#dismiss");

// Get main page
let mainPage = document.querySelector("main");

// Get success message page
let successMessage = document.querySelector(".sect-three");

// Get the confirmation message container and the email span
const emailSpan = document.getElementById("sub_email");

function isValidEmail(email) {
  // A robust email validation regex
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
}

function mail() {
  // Retrieve the value entered by the user
  const userEmail = emailInput.value;

  if (isValidEmail(userEmail)) {
    // Update the email span content
    emailSpan.textContent = userEmail;
    // Display the success page
    successMessage.style.display = "block";
    // Un-display the main page
    mainPage.style.display = "none";
  } else {
    // Display an error message
    alert("Please enter a valid email address.");
  }
}

// Add an event listener to the button
subscribeButton.addEventListener("click", mail);

// Add event listener to successButton
dismissButton.addEventListener("click", function () {
  // Un-display the success page
  successMessage.style.display = "none";

  // Display the main page
  mainPage.style.display = "flex";
});
