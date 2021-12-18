class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.countMiliseconds = 0;
    this.millisecondsInterval = null;
    
  }
  start(cb){
    this.intervalId = setInterval(() =>{
      this.currentTime += 1
      this.countMiliseconds += 1
      
      if(cb){
        cb()
      }
    
      // return this.currentTime += 1;
    }, 1000)

  }
  // startMilliseconds(){
  //   this.millisecondsInterval = setInterval(() =>{

  //     return this.countMiliseconds += 1
      
  //   }, 1)
    

  // }
  getMiliseconds() {
    return this.countMiliseconds % 100
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60);
      
      
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if(String(value).length <2){
      return `0${value}` //'11' 
    }
    return String(value)
  }

  stop() {
    clearInterval(this.intervalId)
    clearInterval(this.millisecondsInterval)
  }

  reset() {
    this.currentTime = 0
    this.countMiliseconds = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let miliseconds = this.computeTwoDigitNumber(this.getMiliseconds())
    let timestamp = minutes + `:` + seconds + `:` + miliseconds
    
    return timestamp
  }

  }


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
