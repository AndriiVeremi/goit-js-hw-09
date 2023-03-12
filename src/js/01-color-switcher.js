import '../css/common.css'

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyEl: document.body,
}

const changer = {

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
        clearInterval(this.intervalId);
        this.isActive = false; 
    },
}

refs.startBtn.addEventListener('click', () => {
    changer.start();
});

refs.stopBtn.addEventListener('click', () => {
    changer.stop();
});

const getColorBody = () => {
    let randomHexColor = getRandomHexColor()
    refs.bodyEl.style.backgroundColor = randomHexColor;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
