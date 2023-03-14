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


