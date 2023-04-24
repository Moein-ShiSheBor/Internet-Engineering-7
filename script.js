const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const phoneInput = document.querySelector('#phone');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const phoneError = document.querySelector('#phone-error');
const submitButton = document.querySelector('#submit-btn');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Email validation
  if (!emailInput.checkValidity()) {
    emailError.textContent = emailInput.validationMessage;
  } else {
    emailError.textContent = '';
  }

  // Password validation
  if (!passwordInput.checkValidity()) {
    passwordError.textContent = passwordInput.validationMessage;
  } else {
    passwordError.textContent = '';
  }

  // Phone validation
  if (!phoneInput.checkValidity()) {
    phoneError.textContent = phoneInput.validationMessage;
  } else {
    phoneError.textContent = '';
  }

  // If all validations pass, submit the form
  if (form.checkValidity()) {
    submitButton.disabled = true; // Disable the button to prevent multiple submissions
    form.submit();
  }
});
