import '../css/common.css'

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyEl: document.body,
}

refs.startBtn.disabled = false;

const changerBg = {

    intervalId: null,

    start() {
        refs.startBtn.disabled = true;
        this.intervalId = setInterval(() => {
            getColorBody();
        }, 1000, 1000)
    },

    stop() {
        refs.startBtn.disabled = false;
        clearInterval(this.intervalId);
    },
}

refs.startBtn.addEventListener('click', () => {
    changerBg.start();
});

refs.stopBtn.addEventListener('click', () => {
    changerBg.stop();
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function getColorBody() {
    let randomHexColor = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = randomHexColor;
};

 //============== VARIANT 2 =============================================

// const refs = {
//     startBtn: document.querySelector('button[data-start]'),
//     stopBtn: document.querySelector('button[data-stop]'),
//     bodyEl: document.body,
// }

// const changColorBg = {

//     intervalId: null,
//     isActive: false,

//     start() {

//         if (this.isActive) {
//             return;
//         }

//         this.intervalId = setInterval(() => {
//             this.isActive = true;
//             refs.bodyEl.style.backgroundColor = getRandomHexColor();
//         }, 1000);
//     },

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     }
// }

// refs.startBtn.addEventListener('click', () => {
//     changColorBg.start();
// });

// refs.stopBtn.addEventListener('click', () => {
//     changColorBg.stop();
// });

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }
