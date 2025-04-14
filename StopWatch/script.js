// Analog Clock Logic
function updateAnalogClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  
    document.getElementById('secondHand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById('hourHand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  }
  
  setInterval(updateAnalogClock, 1000);
  updateAnalogClock();
  
  // Stopwatch Logic
  let stopwatchInterval;
  let startTime;
  let elapsed = 0;
  let isRunning = false;
  
  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    const millis = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${hrs}:${mins}:${secs}.${millis}`;
  }
  
  function updateStopwatchDisplay() {
    const now = Date.now();
    const diff = now - startTime + elapsed;
    document.getElementById('stopwatchTime').textContent = formatTime(diff);
  }
  
  function startStopwatch() {
    if (!isRunning) {
      isRunning = true;
      startTime = Date.now();
      stopwatchInterval = setInterval(updateStopwatchDisplay, 10);
    }
  }
  
  function stopStopwatch() {
    if (isRunning) {
      isRunning = false;
      clearInterval(stopwatchInterval);
      elapsed += Date.now() - startTime;
    }
  }
  
  function resetStopwatch() {
    stopStopwatch();
    elapsed = 0;
    document.getElementById('stopwatchTime').textContent = '00:00:00.00';
  }
  