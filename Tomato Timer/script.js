
var _timeLimit = 25;
var interval;

function setTimeLimit(timeLimit){
    stop();
    if(timeLimit === 25){
        document.getElementById('timer').innerHTML = '25:00';
    }
    if(timeLimit === 15){
        document.getElementById('timer').innerHTML = '15:00';
    }
    if(timeLimit === 5){
        document.getElementById('timer').innerHTML = '05:00';
    }
    _timeLimit = prependZero(timeLimit);
    reset();
}

function start(){
    document.getElementById('startButton').disabled = true;
    
    interval = window.setInterval(calculateTime, 1000);    
    let totalSeconds = _timeLimit * 60;    

    function calculateTime(){
        
        totalSeconds -= 1;

        console.log(Math.floor(totalSeconds / 60) + ':' + totalSeconds % 60);
        document.getElementById('timer').innerHTML = 
            prependZero(Math.floor(totalSeconds / 60)) + ':' + prependZero(totalSeconds % 60);

        if(totalSeconds === 0){
            stop();
            alert('You got a tomato!');
        }
    }
}

function stop(){
    window.clearInterval(interval);
    document.getElementById('startButton').disabled = false;
}

function reset(){
    stop();
    totalSeconds = _timeLimit * 60;
    document.getElementById('timer').innerHTML = _timeLimit + ':00';
}

function prependZero(number){
    if(number < 10){
        return '0' + number;
    } else{
        return number;
    }
}







