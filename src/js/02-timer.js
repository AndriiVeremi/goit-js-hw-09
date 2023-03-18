import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
    inputData: document.querySelector('input#datetime-picker'), 
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

let intervalId = null;
let selectedDate = null;
let currentDate = null;

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', promoTimers);

Report.info('Хелов май френд!', 'Будь добрий тицьни Okей!', 'Ок!');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        onSetData(selectedDates);
    },
};

flatpickr("input#datetime-picker", options);

function onSetData(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    currentDate = new Date().getTime();
    
    if (selectedDate < currentDate) {
        refs.startBtn.disabled = true;
        Report.failure('🥺 Уууу...', 'щось не так! Спробуй ще раз');
    } else {
        refs.startBtn.disabled = false;
    }
};

function promoTimers() {
    intervalId = setInterval(() => {
        currentDate = new Date().getTime();
        const promoTime = selectedDate - currentDate;
        timerContent(convertMs(promoTime));
        refs.startBtn.disabled = true;

        if (selectedDate - currentDate < 1000) {
            clearInterval(intervalId)
            Report.success('Вітаю!');
            refs.startBtn.disabled = false;
        }
    }, 1000);
};

function timerContent({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};


//============== VARIANT 2 =============================================


// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//     input: document.querySelector('#datetime-picker'),
//     startBtn: document.querySelector('button[data-start]'),
//     day: document.querySelector('[data-days]'),
//     hours: document.querySelector('[data-hours]'),
//     minutes: document.querySelector('[data-minutes]'),
//     seconds: document.querySelector('[data-seconds]'),
// }

// let intervalId = null;
// let selectedDate = null;
// let currentData = null;

// refs.startBtn.disabled = true;

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         if (selectedDates[0] <= new Date()) {
//             Notify.failure('Please choose a date in the future');
//         } else {
//             selectedDate = selectedDates[0];
//             refs.startBtn.disabled = false;
//         }
//     },
// };

// flatpickr(refs.input, options);

// refs.startBtn.addEventListener('click', onStartTimer)

// function onStartTimer() {
//     refs.startBtn.disabled = true;
//     const intervaId = setInterval(() => {

//         currentData = new Date()
//         let promoData = selectedDate - currentData

//         if (promoData <= 0) {
//             clearInterval(intervaId)
//             Notify.success('Game over');
//             return;
//         }

//         const newTimes = convertMs(promoData)

//         refs.day.textContent = newTimes.days
//         refs.hours.textContent = newTimes.hours
//         refs.minutes.textContent = newTimes.minutes
//         refs.seconds.textContent = newTimes.seconds

//     }, 1000)
// }

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = addLeadingZero(Math.floor(ms / day));
//     // Remaining hours
//     const hours = addLeadingZero(Math.floor((ms % day) / hour));
//     // Remaining minutes
//     const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//     // Remaining seconds
//     const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//     return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }




