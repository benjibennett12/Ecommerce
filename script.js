const name = document.getElementById('name');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const dropdown = document.getElementById('dropdown');
const subscribe = document.getElementById('subscribe');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const dropdownError = document.getElementById('dropdownError');
const thankyou = document.getElementById('thankyou');

subscribe.addEventListener('click', handleSubscribe); //might need to change the click to submit
function handleSubscribe(e) {
    e.preventDefault();
    validateName(name);
    validatePhone(phone);
    validateEmail(email);
    // thankyouModal();

    // console.log("handleSubscribe was executed.");
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

function thankyouModal() {
    if (nameError.style.display === 'none' && phoneError.style.display === 'none' && emailError.style.display === 'none') {
        return thankyou.style.display = 'block';
    }
}






