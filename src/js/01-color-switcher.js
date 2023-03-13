import '../css/common.css'

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyEl: document.body,
}

const changerBg = {

    intervalId: null,
    isActive: false,

    start() {

        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            getColorBody();
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
    changerBg.start();
});

refs.stopBtn.addEventListener('click', () => {
    changerBg.stop();
});

function getColorBody() {
    let randomHexColor = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = randomHexColor;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


// const changer = {

//     intervalId: null,
//     isActive: false,

//     start() {

//         if (this.isActive) {
//             return;
//         }
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//              getColorBody();
//         }, 1000, 1000)
//     },

//     // stop() {
//     //     clearInterval(this.intervalId);
//     //     this.isActive = false;
//     // },

//     stop() {

//         if (this.isActive) {
//             clearInterval(this.intervalId);
//             this.isActive = false;
//         }     
//     },

// }

// refs.startBtn.addEventListener('click', () => {
//     changer.start();
// });

// refs.stopBtn.addEventListener('click', () => {
//     changer.stop();
// });

// // const getColorBody = () => {
// //     let randomHexColor = getRandomHexColor()
// //     refs.bodyEl.style.backgroundColor = randomHexColor;
// // };

// function getColorBody() {
//     let randomHexColor = getRandomHexColor()
//     refs.bodyEl.style.backgroundColor = randomHexColor;
// };


// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };
