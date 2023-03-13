import '../css/common.css';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
    inputData: document.querySelector('input#datetime-picker'), // input[type="text"]
    startBtn: document.querySelector('button[data-start]'),
    timerEl: document.querySelector('.timer'),
}

let selectedDate = null;
let currentDate = null;
refs.startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        onSetData(selectedDates);
    },
};

flatpickr("input#datetime-picker", options);

Report.info('Хелов май френд!', 'Будь добрий тицьни на Ok!', 'Ок!');

function onSetData(selectedDates) {

    selectedDate = selectedDates[0].getTime();
    currentDate = new Date().getTime();

    if (selectedDate < currentDate) {
        refs.startBtn.disabled = true;
        Report.failure('🥺 Уууу...', 'Братуха, щось не так! Ти, попробуй ще раз а я нікому не скажу');
       
    } else {
        refs.startBtn.disabled = false; 
        Report.success('Все ок, братанчік!')
    } 
}




// function onStartClick(event) {
    


const timer = {

    // intervalId: null,
    // isActive: false,

    start() {
        console.log('message')
        // if (this.isActive) {
        //     return;
        // }
        // this.isActive = true;
        this.intervalId = setInterval(() => {
            // getColorBody();
        }, 1000, 1000)
    },

    stop() {

        if (this.isActive) {
            clearInterval(this.intervalId);
            this.isActive = false;
        }
    },
}

refs.startBtn.addEventListener('click', () => {
    timer.start();
})


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}