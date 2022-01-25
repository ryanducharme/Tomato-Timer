
var _timeLimit = 25;
var interval;
var audio = new Audio('assets/mixkit-positive-notification-951.wav');
audio.volume = 0.5;
var isPaused = true;
let totalSeconds = 25 * 60;

function setTimeLimit(timeLimit) {
    stop();
    if (timeLimit === 25) {
        document.getElementById('timer').innerHTML = '25:00';
    }
    if (timeLimit === 15) {
        document.getElementById('timer').innerHTML = '15:00';
    }
    if (timeLimit === 5) {
        document.getElementById('timer').innerHTML = '05:00';
    }
    _timeLimit = prependZero(timeLimit);

    reset();
}

// WHEN PRESSING START AFTER PAUSIN IT WILL RESET THE TIMER. FIX THIS PLS

function start() {

    document.getElementById('startButton').disabled = true;
    interval = window.setInterval(calculateTime, 1000);

    if (!isPaused) {
        totalSeconds = _timeLimit * 60;
    }


    function calculateTime() {

        totalSeconds -= 1;
        document.getElementById('timer').innerHTML =
            prependZero(Math.floor(totalSeconds / 60)) + ':' + prependZero(totalSeconds % 60);

        if (totalSeconds === 0) {
            stop();
            audio.play();
        }
    }
}

function stop() {
    window.clearInterval(interval);
    document.getElementById('startButton').disabled = false;
    isPaused = true;
}

function reset() {
    stop();
    totalSeconds = _timeLimit * 60;
    document.getElementById('timer').innerHTML = _timeLimit + ':00';
}

function prependZero(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}


function addTask()
{
    
    var taskData = document.getElementById('add-task-input').value;
    var taskList = document.getElementById('task-list')
    // onsole.log(task);

    var newItem = document.createElement('li');
    newItem.className = 'task-item'
    newItem.textContent = taskData;
    taskList.appendChild(newItem);
    document.getElementById('add-task-input').value = ""
}






