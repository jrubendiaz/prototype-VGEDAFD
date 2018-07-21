let button = document.querySelector('.btn--menu');
let menu = document.querySelector('.menu__nav');
let options = menu.querySelectorAll('a');
let informationOptions = document.querySelectorAll('.information__option');
let modal = document.querySelector('.informacion__modal');
let closeButton = document.querySelector('.__close--modal');
let calculateButton = document.querySelector('#calculate-button');
let menuA = document.querySelectorAll('.menu__nav a');
let menuButton = document.querySelector('.btn--menu');

/* LISTADO DE COCHES */
let cars = ['a1', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'q2'];
let periods = [{
    years: 2,
    kms: '30.000'
}, {
    years: 4,
    kms: '60.000'
},{
    years: 6,
    kms: '90.000'
}, {
    years: 8,
    kms: '120.000'
}];

/* ELEMENTOS PARA EL MODAL DE COCHES */
let carSelectorButton = document.querySelector('.selector--car');
let carSelector = document.querySelector('.modal--car-selector');
let carSelectorCloseBotton = carSelector.querySelector('.__close--car-selector');

/* ELEMENTOS PARA EL MODAL DE PERIODO */
let periodSelectorButton = document.querySelector('#period-selector');
let periodSelector = document.querySelector('.modal--period-selector');
let periodSelectorCloseBotton = periodSelector.querySelector('.__close--period-selector');

var active = false;

/* Functions */
function showModal() {
    modal.classList.add('active');
    disableScroll();
}
function closeModal() {
    modal.classList.remove('active');
    enableScroll();
}
function showCarSelector() {
    disableScroll();
    let grid = document.querySelector('#car-grid');
    grid.innerHTML = "";
    cars.forEach(car => {
        let carHTML = `<div onclick="selectCar('${car}')" class="selected-option d-flex justify-content-between my-1 col-12">                        
        <div class="text__container col-6 d-flex flex-column align-items-start justify-content-center">
            <label for="model">MODELO</label><p id="car-model">${car}</p>
        </div>
        <div class="img__container col-6 mr-0 pr-0 d-flex align-items-center justify-content-end">
            <img id="img-car" class="img-fluid" src="assets/${car}.png" alt="Audi ${car}">
        </div>    
        </div>`;
        grid.innerHTML += carHTML;
    })
    carSelector.classList.add('active');
}
function closeCarSelector() {
    carSelector.classList.remove('active');
    enableScroll();
}
function showPeriodSelector() {
    disableScroll();
    let grid = document.querySelector('#period-grid');
    grid.innerHTML = "";
    periods.forEach(period => {
        let periodHTML = `<div onclick="selectPeriod('${period.years}', '${period.kms}')" class="selected-option d-flex align-items-center justify-content-between my-1 col-12">
        <div class="text__container col-6 d-flex flex-column align-items-start">
        <label for="years">AÑOS</label> 
        <p id="years">${period.years}</p>
        </div>
        <div class="col-6 subtext__container d-flex flex-column align-items-end justify-content-center">
            <p id="kms">${period.kms}</p>
            <label for="kms">Kms</label>
        </div>
        </div>`;
        grid.innerHTML += periodHTML;
    })
    
    periodSelector.classList.add('active');
}
function closePeriodSelector() {
    enableScroll();
    periodSelector.classList.remove('active');
}
function disableScroll() {
    document.body.style.overflow = 'hidden';
}
function enableScroll() {
    document.body.style.overflow = 'auto';
}
function selectCar(car) {
    let selectedCarHTML = document.querySelector('#selected-car');
    let model = selectedCarHTML.querySelector('#car-model');
    let img = selectedCarHTML.querySelector('#img-car');
    
    model.innerText = car;
    img.src = `assets/${car}.png`
    let plan = document.querySelector('#plan');
    plan.classList.add('d-none');
    closeCarSelector();
}
function selectPeriod(years, kms) {
    let selectedPeriodHTML = document.querySelector('#period-selector');
    let _years = selectedPeriodHTML.querySelector('#years');
    let _kms = selectedPeriodHTML.querySelector('#kms');

    _years.innerText = years;
    _kms.innerText = kms;
    let plan = document.querySelector('#plan');
    plan.classList.add('d-none');
    closePeriodSelector();
}

function showPlan() {
    let plan = document.querySelector('#plan');
    plan.classList.add('d-none');
    plan.classList.remove('d-none');
}

function backgroundControl() {
    let bg01 = document.body.querySelector('.bg--01');
    let header = document.querySelector('header').getBoundingClientRect().height;
    let home = document.querySelector('#home').getBoundingClientRect().height;
    bg01.style.height = `${header + home}px`;

    let coberturas = document.querySelector('#coberturas');
    let bg = coberturas.querySelector('.bg--02');
    let height = coberturas.getBoundingClientRect().height;
    bg.style.height = `${height}px`;
    console.log(coberturas.getBoundingClientRect().height);
}

document.onload = backgroundControl();
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
calculateButton.addEventListener('click', showPlan);
menuA.forEach(a => {
    a.addEventListener('click', enableScroll);
})
menuButton.addEventListener('click', () => {
    menuButton.classList.contains('active') ? disableScroll() : enableScroll();
})