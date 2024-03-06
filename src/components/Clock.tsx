import { useState, useEffect } from 'react';
import moment from 'moment';

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='absolute text-black-gray bottom-1 lg:bottom-2 right-0 opacity-90'>
      <span style={{fontSize: 'clamp(18px, 2vw, 40px)'}} className="font-hero tracking-wide">BC, MX  {currentTime.format('HH:mm:ss A')}</span>
    </div>
  );
};