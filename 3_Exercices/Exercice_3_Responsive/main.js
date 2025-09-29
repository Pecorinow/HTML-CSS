const NAV = document.getElementById('nav');
const BTN_MENU = document.getElementById('menu');

BTN_MENU.addEventListener('click', () => {
    NAV.classList.toggle('hide');
    NAV.classList.toggle('show');
});