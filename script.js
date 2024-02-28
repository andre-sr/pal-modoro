//VARIABLES
let timeInterval
let totalSeconds = 0
let totalMinutes = 0
let totalhours = 0

const startBt = document.querySelector('#start-bt')
const pauseBt = document.querySelector('#pause-bt')
const restartBt = document.querySelector('#restart-bt')

//EVENTOS
startBt.addEventListener('click', () => {startTimer()})
pauseBt.addEventListener('click', () => {pause()})
restartBt.addEventListener('click', () => {restart()})

//FUNCTIONS
function startTimer() {
    if (!timeInterval){
        timeInterval = setInterval(updateTimer, 1000)
        
    }
}

function updateTimer() {
    console.log(timeInterval)
    totalSecondsFormat = totalSeconds.toString().padStart(2,'0')
    totalMinutesFormat = totalMinutes.toString().padStart(2,'0')

    document.querySelector('#timer').innerText = `00:${totalMinutesFormat}:${totalSecondsFormat}`
    if (totalSeconds == 59){
        totalMinutes++
        totalSeconds = 0
    } else {
        totalSeconds++
    }
}

function pause() {
    clearInterval(timeInterval);
    timeInterval = null;
}

function restart() {
    pause()
    totalSeconds = 0
    totalMinutes = 0
    totalhours = 0
    updateTimer()
}
