const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
    return (seconds) => {
        setInterval(() => {
            if (seconds >= 0) {
                let hours = Math.floor(seconds / 3600)
                let minutes = Math.floor(seconds / 60)
                let sec = Math.floor(seconds % 60)
                hours = hours < 10 ? '0' + hours : hours
                minutes = minutes < 10 ? '0' + minutes : minutes
                sec = sec < 10 ? '0' + sec : sec
                timerEl.innerHTML = `${hours}:${minutes}:${sec}`;
                seconds--
            }
            return
        }, 1000)

    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    const inputText = inputEl.value
        .split('')
        .map(Number)
        .filter(c => typeof c === 'number')
        .filter(value => { return !Number.isNaN(value) })
        .join('');
    return (newInput = inputText);
});


buttonEl.addEventListener('click', () => {
    if (timerEl.innerHTML === '00:00:00') {
        const seconds = Number(newInput);

        animateTimer(seconds);


        inputEl.value = '';
    }
    return
});
