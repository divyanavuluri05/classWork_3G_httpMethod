const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const continueButton = document.querySelector('.continue-btn');
function validateInputs() {
    if (emailInput.validity.valid && passwordInput.value.length >= 6) {
        continueButton.classList.add('active');
        continueButton.disabled = false;
            
    } 
    else 
    {
        continueButton.classList.remove('active');
        continueButton.disabled = true;
    }
}
emailInput.addEventListener('input', validateInputs);
passwordInput.addEventListener('input', validateInputs);