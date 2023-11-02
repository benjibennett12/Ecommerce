const name = document.getElementById('name');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const dropdown = document.getElementById('dropdown');
const subscribeForm = document.getElementById('subscribeForm');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const dropdownError = document.getElementById('dropdownError');
const thankyouModal = document.querySelector('.modal');
const modalText = document.querySelector('.modal-text');
const backButton = document.getElementById('back');

// subscribeForm.addEventListener("click", handleSubscribe);

function handleSubscribe(event) {
    event.preventDefault();
    validateName(name);
    validatePhone(phoneNumber);
    validateEmail(email);
    showThankYouModal();
}


function validateName(name) {
    const nameValue = name.value.trim();

    if (nameValue === '' || nameValue === undefined) {
        nameError.textContent = 'Please fill out this form';
        nameError.style.display = 'block';
        name.style.border = '2px solid red';  // taking the asset from the index directly and changing it based on if the conditions are met
    } else {
        nameError.style.display = 'none';
        name.style.border = '2px solid #09c372';
    }

}

function validatePhone(phoneNumber) {
    const phoneValue = phoneNumber.value.trim();
    const phoneRegex = /^\d+$/;

    if (phoneValue === '' || phoneValue === undefined) {
        phoneError.textContent = 'Please fill out this form';
        phoneError.style.display = 'block';
        phone.style.border = '2px solid red';
    } else if (!phoneRegex.test(phoneValue)) {
        phoneError.textContent = 'Numbers Only';
        phoneError.style.display = 'block';
        phone.style.border = '2px solid red';
    } else {
        phoneError.style.display = 'none';
        phone.style.border = '2px solid #09c372';
    }
}


function validateEmail(email) {
    const emailValue = email.value.trim();
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (emailValue === '' || emailValue === undefined) {
        emailError.textContent = 'Please fill out this form';
        emailError.style.display = 'block';
        email.style.border = '2px solid red';
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Invalid email address';
        emailError.style.display = 'block';
        email.style.border = '2px solid red';
    } else {
        emailError.style.display = 'none';
        email.style.border = '2px solid #09c372';
    }
}


function showThankYouModal() {
    if (nameError.style.display === 'none' && phoneError.style.display === 'none' && emailError.style.display === 'none') {
        return thankyouModal.style.display = 'block';
    } else {
        return thankyouModal.style.display = 'none';
    }
}



backButton.addEventListener('click', function () {
    thankyouModal.style.display = 'none';
    subscribeForm.reset();
});







