//VARIABLES
let timeInterval
let totalSeconds = 0
let totalMinutes = 25

const startBt = document.querySelector('#start-bt')
const pauseBt = document.querySelector('#pause-bt')
const restartBt = document.querySelector('#restart-bt')
const plusBt = document.querySelector('#plus')
const minusBt = document.querySelector('#minus')

//EVENTOS
startBt.addEventListener('click', () => {startTimer()})
pauseBt.addEventListener('click', () => {pause()})
restartBt.addEventListener('click', () => {restart()})
plusBt.addEventListener('click', () => {
    totalMinutes++
    attTimerDisplay()
})
minusBt.addEventListener('click', () => {
    totalMinutes--
    attTimerDisplay()
})

//FUNCTIONS
function startTimer() {
    if (!timeInterval){
        timeInterval = setInterval(updateTimer, 1000)
        
    }
}

function updateTimer() {
    attTimerDisplay()

    if (totalSeconds == 0){
        totalMinutes = totalMinutes - 1
        totalSeconds = 59
    } else {
        totalSeconds = totalSeconds - 1
    }
}

function attTimerDisplay () {
    totalSecondsFormat = totalSeconds.toString().padStart(2,'0')
    totalMinutesFormat = totalMinutes.toString().padStart(2,'0')

    document.querySelector('#timer').innerText = `00:${totalMinutesFormat}:${totalSecondsFormat}`
}

function pause() {
    clearInterval(timeInterval);
    timeInterval = null;
}

function restart() {
    pause()
    totalSeconds = 0
    totalMinutes = 25
    
    updateTimer()
}
