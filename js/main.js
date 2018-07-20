let button = document.querySelector('.btn--menu');
let menu = document.querySelector('.menu__nav');
let options = menu.querySelectorAll('a');
let informationOptions = document.querySelectorAll('.information__option');
let modal = document.querySelector('.informacion__modal');
let closeButton = document.querySelector('.__close--modal');

/* ELEMENTOS PARA EL MODAL DE COCHES */
let carSelectorButton = document.querySelector('.selector--car');
let carSelector = document.querySelector('.modal--car-selector');
let carSelectorCloseBotton = carSelector.querySelector('.__close--car-selector');

/* ELEMENTOS PARA EL MODAL DE PERIODO */
let periodSelectorButton = document.querySelector('.selector--period');
let periodSelector = document.querySelector('.modal--period-selector');
let periodSelectorCloseBotton = periodSelector.querySelector('.__close--period-selector');

var active = false;

/* Functions */
function showModal() {
    modal.classList.add('active');
}
function closeModal() {
    modal.classList.remove('active');
}
function showCarSelector() {
    carSelector.classList.add('active');
}
function closeCarSelector() {
    carSelector.classList.remove('active');
}
function showPeriodSelector() {
    periodSelector.classList.add('active');
}
function closePeriodSelector() {
    periodSelector.classList.remove('active');
}
/* Listeners */

button.addEventListener('click', () => {
    active = !active;
    active ? button.classList.add('active') : button.classList.remove('active');
    active ? menu.classList.add('active') : menu.classList.remove('active');
})

options.forEach(option => {option.addEventListener('click', () => {
    active = !active;
    active ? button.classList.add('active') : button.classList.remove('active');
    active ? menu.classList.add('active') : menu.classList.remove('active');
})})

informationOptions.forEach(option => {
    option.addEventListener('click', showModal);
})

closeButton.addEventListener('click', closeModal);
carSelectorButton.addEventListener('click', showCarSelector);
carSelectorCloseBotton.addEventListener('click', closeCarSelector);
periodSelectorButton.addEventListener('click', showPeriodSelector);
periodSelectorCloseBotton.addEventListener('click', closePeriodSelector);