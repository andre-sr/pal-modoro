///////////////////CODIGO PARA O TIMER DA PAUSA//////////////////////
let timeInterval2
let totalSeconds2 = 0
let startTotalMinutes2 = 1
let totalMinutes2 = 1

const startBt2 = document.querySelector('#start-bt2')
const pauseBt2 = document.querySelector('#pause-bt2')
const restartBt2 = document.querySelector('#restart-bt2')


//EVENTS
startBt2.addEventListener('click', () => {startTimer()})
pauseBt2.addEventListener('click', () => {pause()})
restartBt2.addEventListener('click', () => {restart()})

//FUNCTIONS
function startTimer() {
    totalMinutes2 = startTotalMinutes2
    if (!timeInterval2){
        timeInterval2 = setInterval(updateTimer, 1000)
    }
}

function updateTimer() {
    attTimerDisplay(totalSeconds2, totalMinutes2)

    if (totalMinutes2 === 0 && totalSeconds2 === 0) {
        creator()
    } else if (totalSeconds2 == 0){
        totalMinutes2 = totalMinutes2 - 1
        totalSeconds2 = 59
    } else {
        totalSeconds2 = totalSeconds2 - 1
    }
}

function attTimerDisplay (seconds, minutes) {
    totalSecondsFormat2 = seconds.toString().padStart(2,'0')
    totalMinutesFormat2 = minutes.toString().padStart(2,'0')

    document.querySelector('#timer2').innerText = `00:${totalMinutesFormat2}:${totalSecondsFormat2}`
}

function pause() {
    clearInterval(timeInterval2);
    timeInterval2 = null;
}

function restart() {
    clearInterval(timeInterval2);
    totalSeconds2 = 0
    totalMinutes2 = 5
    startTotalMinutes2 = 5
    attTimerDisplay(totalSeconds2, totalMinutes2)
}