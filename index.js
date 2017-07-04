var TIMEOUT_IN_SECS = 5 * 60
var TEMPLATE = '<h1><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'
var MOTIVATING_QUOTES = [
    'Push yourself because no one else is going to do it for you.',
    'If it is important for you, you will find a way. If not, you will find an excuse.',
    'The secret of getting ahead is getting started',
    'The expert in anything was one a beginner',
    'It always seen impossible, until it is done.',
    'I\'m not telling you it is going to be easy, i\'m telling you it\'s going to be worth it.',
    'A year from now you wish you had started today'
]

var layoutCell = document.getElementsByClassName('layout__cell layout__cell_body')[0]
layoutCell.setAttribute("style", "margin-left: 50px")

if (sessionStorage.getItem('timestampOnStart') === null)
{
    var timestampOnStart = getTimestampInSecs()
    sessionStorage.setItem('timestampOnStart', timestampOnStart)
} else {
    var timestampOnStart = sessionStorage.getItem('timestampOnStart')
}

// adds HTML tag to current page
var timerContainer = document.createElement('div')
timerContainer.setAttribute("style", "height: 0px;"+
    "margin-left:15px;" +
    "float:left;margin-top:10px;"+
    "position: sticky; top: 20px;" +
    "margin-right: 20px")
var bodyTag = document.getElementsByClassName('layout__row layout__row_body')[0]
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)

timerContainer.innerHTML = TEMPLATE
displayTimer()

function getTimestampInSecs(){
    var timestampInMilliseconds = new Date().getTime()
    return Math.round(timestampInMilliseconds/1000)
}

function padZero(number){
    return ("00" + String(number)).slice(-2);
}

function displayTimer(){
    var currentTimestamp = getTimestampInSecs()
    var secsGone = currentTimestamp - timestampOnStart
    var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)

    var minutes = Math.floor(secsLeft / 60);
    var seconds = secsLeft - minutes * 60;

    document.getElementById('timer-minutes').innerHTML = padZero(minutes)
    document.getElementById('timer-seconds').innerHTML = padZero(seconds)
}

function showAlert(){
    window.alert(MOTIVATING_QUOTES[Math.floor(Math.random()*MOTIVATING_QUOTES.length)])
}

function showAnnoyingBanner() {
    setInterval(showAlert, 30000)
}
setInterval(displayTimer, 300)
setTimeout(showAnnoyingBanner, 270000)
