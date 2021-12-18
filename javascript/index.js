const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printSeconds()
  printMinutes()
  printMilliseconds()

}

function printMinutes() {
const currentMinutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
minDecElement.innerHTML = currentMinutes[0]; // if time is 43, currentMinutes[0] = 4
minUniElement.innerHTML = currentMinutes[1]; // if time is 43, currentMinutes[1] = 3
}

function printSeconds() {
  const currentSeconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerHTML = currentSeconds[0] // if time is 43, currentSecond[0] = 4
  secUniElement.innerHTML = currentSeconds[1] // if time is 43, currentSecond[1] = 3
 

  
  
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const currentMiliseconds = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds());
  milDecElement.innerHTML = currentMiliseconds[0];
  milUniElement.innerHTML = currentMiliseconds[1];
}

function printSplit() {
  // ... your code goes here
  
  

}

function clearSplits() {
  // ... your code goes here
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop()
  btnLeftElement.className = `btn start`;
  btnLeftElement.innerHTML = `START`
  btnRightElement.className = `btn reset`;
  btnRightElement.innerHTML = `RESET`
}

function setSplitBtn() {
  // ... your code goes here
  const currentTime = document.createElement(`li`);
  currentTime.innerHTML = chronometer.split();
  splitsElement.appendChild(currentTime)
  console.log(chronometer.getMiliseconds())
}

function setStartBtn() {
  if(btnLeftElement.className === `btn start`){
    chronometer.start(printTime)
    
    btnLeftElement.className = `btn stop`;
    btnLeftElement.innerHTML =`STOP`;
    btnRightElement.className = `btn split`;
    btnRightElement.innerHTML = `SPLIT`;
    
    
    

  }
  else if(btnLeftElement.className === `btn stop`){
    
    setStopBtn()
     
  }
  
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  clearSplits()
  minDecElement.innerHTML = "0";
  minUniElement.innerHTML = "0";
  secDecElement.innerHTML = "0";
  secUniElement.innerHTML = "0";
  milDecElement.innerHTML = "0";
  milUniElement.innerHTML = "0";
  


  
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  setStartBtn()
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.className === `btn split`){
    setSplitBtn()
  }
  else{
    setResetBtn()
  }
});
