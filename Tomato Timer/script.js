
var _timeLimit = 25;
var interval;
var audio = new Audio('assets/mixkit-positive-notification-951.wav');
audio.volume = 0.5;
var isPaused = true;
let totalSeconds = 25 * 60;

let ALL_TASKS = [];
let COMPLETED_TASKS = [];

const fruits = {

    0: {
        Name: 'Tomato',
        Count: 0
    },
    1: {
        Name: 'Eggplant',
        Count: 0
    },
    2: {
        Name: 'Grape',
        Count: 0
    },
    3: {
        Name: 'Melon',
        Count: 0
    },
    4: {
        Name: 'Watermelon',
        Count: 0
    },
    5: {
        Name: 'Orange',
        Count: 0
    },
    6: {
        Name: 'Lemon',
        Count: 0
    },
    7: {
        Name: 'Banana',
        Count: 0
    },
    8: {
        Name: 'Pineapple',
        Count: 0
    },
    9: {
        Name: 'RedApple',
        Count: 0
    },
    10: {
        Name: 'GreenApple',
        Count: 0
    },
    11: {
        Name: 'Pear',
        Count: 0
    },
    12: {
        Name: 'Peach',
        Count: 0
    },
    13: {
        Name: 'Cherry',
        Count: 0
    },
    14: {
        Name: 'Strawberry',
        Count: 0
    }
}

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
            getRandomFruit();
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


function addTask() {
    var taskData = document.getElementById('add-task-input').value;

    if (taskData != "") {
        var id = Math.ceil(Math.random() * 1000000);
        ALL_TASKS.push(new Task(taskData, false, id));

        var taskList = document.getElementById('task-list')
        var newItem = document.createElement('li');
        var taskContainer = document.createElement('div');
        var deleteButton = document.createElement('button');
        var completeButton = document.createElement('button');

        taskContainer.className = 'task-item-container';
        taskContainer.id = id;

        deleteButton.className = 'task-button';
        deleteButton.innerHTML = '&#10060;'
        deleteButton.onclick = deleteTask;

        completeButton.className = 'task-button';
        completeButton.innerHTML = '&#9989;'
        completeButton.onclick = completeTask;

        newItem.className = 'task-item'
        newItem.textContent = taskData;

        //create containing div to contain both the button and 
        //the li which you can then delete by detecting the parent of the clicked event
        taskList.appendChild(taskContainer);

        taskContainer.appendChild(newItem);
        taskContainer.appendChild(completeButton);
        taskContainer.appendChild(deleteButton);

        document.getElementById('add-task-input').value = ""

        console.log(ALL_TASKS[0]);
    }
}



function deleteTask() {
    //figure out what LI was clicked and relate that to a position in the ALL_TASKS array
    var clickedID = this.parentElement.id;
    document.getElementById(clickedID).remove();
    ALL_TASKS.splice(ALL_TASKS.indexOf(clickedID), 1);

    //document.getElementById(idClicked).remove();

    // document.getElementById(task.ID).remove();
    // 

}

function completeTask() {
    var clickedID = this.parentElement.id;
    getRandomFruit();
    ALL_TASKS.forEach(task => {
        if (task.ID == clickedID) {
            task.complete = true;
        }
    });
    document.getElementById(clickedID).remove();

    //COMPLETED_TASKS.push();
}
// 16 total fruit emojis. Make a function to compelete a task, or whenever 25 minutes goes by to collect a new randomly given fruit.
//store completed tasks in local storage? JS Object to represent a task?

function getRandomFruit() {
    var rand = Math.ceil(Math.random() * 15 - 1);
    var fruitKeys = Object.keys(fruits);
    for (let i = 0; i < fruitKeys.length; i++) {
        if (fruitKeys[i] == rand) {
            console.log(fruits[i].Count);
            fruits[i].Count += 1;
        }
    }
}

function chooseFruit(name) {

}


function Task(description, complete, ID) {
    this.description = description;
    this.complete = complete;
    this.ID = ID;
}