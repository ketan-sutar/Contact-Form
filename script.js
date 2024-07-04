document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('input[type="button"]');
    submitButton.addEventListener('click', validateForm);
  });
  
  function validateForm(e) {
    e.preventDefault

    let isValid = true;
  
    // First Name validation
    const firstName = document.getElementById('first-name').value;
    if (!firstName) {
      document.getElementById('FirstnameError').textContent = 'This field is required.';
      isValid = false;
    } else {
      document.getElementById('FirstnameError').textContent = '';
    }
  
    // Last Name validation
    const lastName = document.getElementById('last-name').value;
    if (!lastName) {
      document.getElementById('LastnameError').textContent = 'This field is required.';
      isValid = false;
    } else {
      document.getElementById('LastnameError').textContent = '';
    }
  
    // Email validation
    const email = document.getElementById('email-address').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      document.getElementById('EmailError').textContent = 'Email Address is required.';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('EmailError').textContent = 'Please enter a valid email address';
      isValid = false;
    } else {
      document.getElementById('EmailError').textContent = '';
    }
  
    // Query Type validation
    const queryTypes = document.getElementsByName('general');
    const supportTypes = document.getElementsByName('support');
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
      document.getElementById('queryError').textContent = 'Please select a query type.';
      isValid = false;
    } else {
      document.getElementById('queryError').textContent = '';
    }
  
    // Message validation
    const message = document.getElementById('message-input').value;
    if (!message) {
      document.getElementById('messageError').textContent = 'This field is required.';
      isValid = false;
    } else {
      document.getElementById('messageError').textContent = '';
    }
  
    // Checkbox validation
    const consentCheckbox = document.getElementById('last-check');
    if (!consentCheckbox.checked) {
      document.getElementById('lastError').textContent = 'To submit this form, please consent to being contacted';
      isValid = false;
    } else {
      document.getElementById('lastError').textContent = '';
    }
  
    // Final validation check
    if (isValid) {
      alert('Form submitted successfully!');
      // You can replace this alert with form submission logic
    }
  }
  