import React, {useState, useEffect} from 'react';

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [previousTime, setPreviousTime] = useState(0);
  console.log(isRunning);
  console.log(elapsedTime);
  console.log(previousTime);

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    }
  });

  const handleStopWatch = () => {
    // setIsRunning((prevState) => ({
    //   isRunning: !prevState.isRunning
    // }));

    setIsRunning(!isRunning);

    if(!isRunning) {
      setPreviousTime(Date.now());
    }
  }

  const tick = () => {
    if(isRunning) {
      const now = Date.now(); // Returns milliseconds since 1 Jan, 1970.
      setPreviousTime(now);
      // setElapsedTime((prevState) => ({
      //   elapsedTime: prevState.elapsedTime + (now - previousTime)
      // }));

      setElapsedTime(elapsedTime + (now - previousTime));
    }
  }

  const handleReset = () => {
    setElapsedTime(0);
  }

  const seconds = Math.floor(elapsedTime / 1000);
  return (
    <div className='stopwatch'>
      <h2>Stop Watch</h2>
      <span className='stopwatch-item'>{seconds}</span>
      <button onClick={handleStopWatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default StopWatch;
