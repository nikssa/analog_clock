import React, { useState } from 'react';

const DigitalClock = () => {
  const [ctime, setCtime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    setCtime(new Date().toLocaleTimeString());
  };

  setInterval(updateTime, 1000);
  return (
    <div className='container'>
      <div className='time-box'>{ctime}</div>
    </div>
  );
};

export default DigitalClock;
