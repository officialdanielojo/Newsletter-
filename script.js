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

function mail() {
  // Retrieve the value entered by the user
  const userEmail = emailInput.value;

  // Update the email span content
  emailSpan.textContent = userEmail;

  if (userEmail === "") {
    alert("input correct email");
  }

  console.log(userEmail);
}

// Add an event listener to the button
subscribeButton.addEventListener("click", function () {
  // Display the success page
  successMessage.style.display = "block";

  // Un-display the main page
  mainPage.style.display = "none";
});

// Add event listener to successButton
dismissButton.addEventListener("click", function () {
  // Un-display the success page
  successMessage.style.display = "none";

  // Display the main page
  mainPage.style.display = "flex";
});
