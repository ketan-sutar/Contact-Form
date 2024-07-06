document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector('input[type="button"]');
  submitButton.addEventListener("click", validateForm);
});

function showSuccessMessage() {
  const successMessage = document.getElementById('success-message');
  successMessage.classList.add('show');
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 3000); // Hide after 3 seconds
}

function validateForm(e) {
  e.preventDefault();

  let isValid = true;

  // First Name validation
  const firstName = document.getElementById("first-name");
  const firstNameValue = firstName.value;
  if (!firstNameValue) {
    document.getElementById("FirstnameError").textContent =
      "This field is required.";
    document.getElementById("FirstnameError").classList.add("error-text");
    firstName.style.border="1px solid red"
    isValid = false;
  } else {
    document.getElementById("FirstnameError").textContent = "";
    firstName.style.border = "";
  }

  // Last Name validation
  const lastName = document.getElementById("last-name");
  const lastNameValue = lastName.value;
  if (!lastNameValue) {
    document.getElementById("LastnameError").textContent =
      "This field is required.";
    document.getElementById("LastnameError").classList.add("error-text");
    lastName.style.border="1px solid red"
    isValid = false;
  } else {
    document.getElementById("LastnameError").textContent = "";
    lastName.style.border = "";
  }

  // Email validation
  const email = document.getElementById("email-address");
  const emailValue = email.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValue) {
    document.getElementById("EmailError").textContent =
      "Email Address is required.";
    document.getElementById("EmailError").classList.add("error-text");
    email.style.border="1px solid red"
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    document.getElementById("EmailError").textContent =
      "Please enter a valid email address";
    document.getElementById("EmailError").classList.add("error-text");
    email.style.border = "";
    isValid = false;
  } else {
    document.getElementById("EmailError").textContent = "";
    email.style.border = "";
  }

  // Query Type validation
  const queryTypes = document.getElementsByName("general");
  const supportTypes = document.getElementsByName("support");
  let isQuerySelected = false;
  for (const queryType of queryTypes) {
    if (queryType.checked) {
      isQuerySelected = true;
      break;
    }
  }
  for (const supportType of supportTypes) {
    if (supportType.checked) {
      isQuerySelected = true;
      break;
    }
  }
  if (!isQuerySelected) {
    document.getElementById("queryError").textContent =
      "Please select a query type.";
    document.getElementById("queryError").classList.add("error-text");
    isValid = false;
  } else {
    document.getElementById("queryError").textContent = "";
  }

  // Message validation
  const message = document.getElementById("message-input");
  const messageValue = message.value;
  if (!messageValue) {
    document.getElementById("messageError").textContent =
      "This field is required.";
    document.getElementById("messageError").classList.add("error-text");
    message.classList.add("error-border");
    isValid = false;
  } else {
    document.getElementById("messageError").textContent = "";
    message.classList.remove("error-border");
  }

  // Checkbox validation
  const consentCheckbox = document.getElementById("last-check");
  if (!consentCheckbox.checked) {
    document.getElementById("lastError").textContent =
      "To submit this form, please consent to being contacted";
    document.getElementById("lastError").classList.add("error-text");
    isValid = false;
  } else {
    document.getElementById("lastError").textContent = "";
  }

  // Final validation check
  if (isValid) {
    showSuccessMessage();
    // You can replace this alert with form submission logic
  }
}
