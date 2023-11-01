const name = document.getElementById('name');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const dropdown = document.getElementById('dropdown');
const subscribeForm = document.getElementById('subscribeForm');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const dropdownError = document.getElementById('dropdownError');
const thankyouModal = document.getElementById('thankyou');
const modalText = document.querySelector('.modal-text');
const backButton = document.getElementById('back');


function handleSubscribe() {
    console.log("handlesubscibe");
    e.preventDefault();
    validateName(name);
    validatePhone(phoneNumber);
    validateEmail(email);


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

    if (phoneValue === '' || phoneValue === undefined) {
        phoneError.textContent = 'Please fill out this form';
        phoneError.style.display = 'block';
        phone.style.border = '2px solid red';
    } else if (!Number.isInteger(Number(phoneValue))) {
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

    if (emailValue === '' || emailValue === undefined) {
        emailError.textContent = 'Please fill out this form';
        emailError.style.display = 'block';
        email.style.border = '2px solid red';
    } else {
        emailError.style.display = 'none';
        email.style.border = '2px solid #09c372';
    }
}

function showThankYouModal() {
    thankyouModal.style.display = 'block';
    modalText.textContent = 'Thank you for your submission!';
}

backButton.addEventListener('click', function () {
    thankyouModal.style.display = 'none';
    subscribeForm.reset();
});







