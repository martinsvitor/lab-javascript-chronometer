class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }
  start(cb){
    this.intervalId = setInterval(() =>{
      this.currentTime += 1;
     
          if(cb){
        cb()
      }
    }, 1000)
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60);
      
      
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {

if(value <= 9){
  return `0${value}`
}
return String(value)  
}

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let timestamp = minutes + `:` + seconds
    return timestamp
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
