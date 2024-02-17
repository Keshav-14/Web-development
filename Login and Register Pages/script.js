const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin');
const closeIcon = document.querySelector(".icon-close");

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    if (wrapper.classList.contains('active')) {
        wrapper.classList.remove('active');
    }
});

closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});