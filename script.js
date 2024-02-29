//VARIABLES
let timeInterval
let totalSeconds = 0
let startTotalMinutes = 1
let totalMinutes = 1

const startBt = document.querySelector('#start-bt')
const pauseBt = document.querySelector('#pause-bt')
const restartBt = document.querySelector('#restart-bt')
const plusBt = document.querySelector('#plus')
const minusBt = document.querySelector('#minus')
const streakSection = document.querySelector('#streak-section')

//EVENTOS
startBt.addEventListener('click', () => {startTimer()})
pauseBt.addEventListener('click', () => {pause()})
restartBt.addEventListener('click', () => {restart()})
plusBt.addEventListener('click', () => {
    if (!timeInterval) {
        totalMinutes++
        attTimerDisplay()
    }
})
minusBt.addEventListener('click', () => {
    if (!timeInterval && totalMinutes > 1) {
        totalMinutes--
        attTimerDisplay()
    }
})

//FUNCTIONS
function startTimer() {
    totalMinutes = startTotalMinutes
    if (!timeInterval){
        timeInterval = setInterval(updateTimer, 1000)
        
    }
}

function updateTimer() {
    attTimerDisplay()

    if (totalMinutes === 0 && totalSeconds === 0) {
        creator()
    } else if (totalSeconds == 0){
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

function creator() {
    console.log('flamengo!')
    clearInterval(timeInterval);
    timeInterval = null;
    streakSection.classList.add('streak-section')
    startTotalMinutesFormat = startTotalMinutes.toString().padStart(2,'0')
    streakSection.innerHTML = `<div class="timer-container">
                                    <div id="timer">
                                    Você concluiu um pal-modoro de 
                                    <strong>00:${startTotalMinutesFormat}:00</strong>
                                    minutos. Parabens!
                                    </div>
                                </div>`


    
}
