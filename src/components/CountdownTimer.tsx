import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  //   console.log('targetDate', targetDate);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>();

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    // console.log('difference', difference);
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    // console.log('timeLeft', timeLeft);
    setTimeLeft(timeLeft);
    // return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      //   const timeLeft = calculateTimeLeft();
      //   setTimeLeft(timeLeft);
      //   console.log('calculateTimeLeft');
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //   const timerComponents = [];

  //   Object.keys(timeLeft).forEach((interval) => {
  //     if (!timeLeft[interval]) {
  //       return;
  //     }

  //     timerComponents.push(
  //       <span key={interval}>
  //         {timeLeft[interval]} {interval}{" "}
  //       </span>
  //     );
  //   });

  //   console.log('timeLeft.seconds', timeLeft?.seconds);
  //   console.log('timeLeft', timeLeft);

  return !!timeLeft && timeLeft?.seconds > 0 ? (
    <span>
      {timeLeft?.days} days {timeLeft?.hours} hours {timeLeft?.minutes} minutes{' '}
      {timeLeft?.seconds} seconds
    </span>
  ) : null;
};

export default CountdownTimer;
