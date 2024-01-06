import { useState, useEffect } from 'react';

const DateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState(null);

  const calculateTimeDifference = () => {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();

    if (isNaN(startDateTime) || isNaN(endDateTime)) {
      setResult(null);
      return;
    }

    const timeDifference = endDateTime - startDateTime;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const yearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
    const yearPercentage = (timeDifference / yearInMilliseconds) * 100;

    setResult({
      seconds,
      minutes,
      hours,
      days,
      weeks,
      yearPercentage,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateTimeDifference();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, endDate]);

  return (
    <div>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>

      {result && (
        <div>
          <h2>Time Difference</h2>
          <p>Seconds: {result.seconds}</p>
          <p>Minutes: {result.minutes}</p>
          <p>Hours: {result.hours}</p>
          <p>Days: {result.days}</p>
          <p>Weeks: {result.weeks}</p>
          <p>Year Percentage: {result.yearPercentage.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default DateCalculator;
