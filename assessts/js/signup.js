const signupForm = document.getElementById('signupForm');
const termsCheckbox = document.getElementById('termsCheckbox');
const errorMessage = document.getElementById('errorMessage');

signupForm.addEventListener('submit', function(event) {
    // Prevent form submission if the checkbox is not checked
    if (!termsCheckbox.checked) {
        event.preventDefault(); 
        errorMessage.style.display = 'block'; 
    } 
    else
    {
        errorMessage.style.display = 'none'; 
    }
});