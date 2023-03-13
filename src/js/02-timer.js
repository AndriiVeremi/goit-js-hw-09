import '../css/common.css';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};

flatpickr("#datetime-picker", options);

const refs = {
    input: document.querySelector('input[type="text"]'), //  '#datetime-picker'
    startBtn: document.querySelector('button[data-start]'),
    timerEl: document.querySelector('.timer'),
}




