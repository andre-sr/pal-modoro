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
const musicSectionBt = document.querySelector('#music-section-open')
const taskSectionBt = document.querySelector('#task-section-bt')
const pauseSectionBt = document.querySelector('#pause-section-bt')

//EVENTOS
startBt.addEventListener('click', () => {startTimer()})
pauseBt.addEventListener('click', () => {pause()})
restartBt.addEventListener('click', () => {restart()})
plusBt.addEventListener('click', () => {
    if (!timeInterval) {
        startTotalMinutes++
        attTimerDisplay(totalSeconds, startTotalMinutes)
    }
})
minusBt.addEventListener('click', () => {
    if (!timeInterval && startTotalMinutes > 1) {
        startTotalMinutes--
        attTimerDisplay(totalSeconds, startTotalMinutes)
    }
})
musicSectionBt.addEventListener('click', () => {
    document.querySelector('.modal-section').classList.remove('hidden')
    document.querySelector('#music-section-close').addEventListener('click', () => {
        document.querySelector('.modal-section').classList.add('hidden')
    })
})
taskSectionBt.addEventListener('click', () => {
    document.querySelector('.timer-section').classList.remove('hidden')
    document.querySelector('.pause-section').classList.add('hidden')
})
pauseSectionBt.addEventListener('click', () => {
    document.querySelector('.timer-section').classList.add('hidden')
    document.querySelector('.pause-section').classList.remove('hidden')
})

//FUNCTIONS
function startTimer() {
    totalMinutes = startTotalMinutes
    if (!timeInterval){
        timeInterval = setInterval(updateTimer, 1000)
        
    }
}

function updateTimer() {
    attTimerDisplay(totalSeconds, totalMinutes)

    if (totalMinutes === 0 && totalSeconds === 0) {
        creator()
    } else if (totalSeconds == 0){
        totalMinutes = totalMinutes - 1
        totalSeconds = 59
    } else {
        totalSeconds = totalSeconds - 1
    }
    
}

function attTimerDisplay (seconds, minutes) {
    totalSecondsFormat = seconds.toString().padStart(2,'0')
    totalMinutesFormat = minutes.toString().padStart(2,'0')

    document.querySelector('#timer').innerText = `00:${totalMinutesFormat}:${totalSecondsFormat}`
}

function pause() {
    clearInterval(timeInterval);
    timeInterval = null;
}

function restart() {
    clearInterval(timeInterval);
    totalSeconds = 0
    totalMinutes = 25
    attTimerDisplay()
}

function creator() {
    pause()
    timeInterval = null;
    streakSection.classList.add('streak-section')
    startTotalMinutesFormat = startTotalMinutes.toString().padStart(2,'0')
    streakSection.innerHTML = `${streakSection.innerHTML}
                                <div class="timer-container">
                                    <div id="timer">
                                    Você concluiu um pal-modoro de 
                                    <strong>00:${startTotalMinutesFormat}:00</strong>
                                    minutos. Parabens!
                                    </div>
                                </div>`    
}
