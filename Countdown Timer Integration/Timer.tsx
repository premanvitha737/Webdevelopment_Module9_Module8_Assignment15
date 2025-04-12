// src/components/Timer.tsx
import { useTimer } from 'react-timer-hook';
import React from 'react';

type TimerProps = {
  expiryTimestamp: Date;
};

export default function Timer({ expiryTimestamp }: TimerProps) {
  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('Time expired') });

  const handleReset = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 120); // 2 minutes
    restart(time);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>IELTS Speaking Test</h1>
      <h2 style={{ marginTop: '1rem' }}>Time Remaining</h2>
      <div style={{ fontSize: '48px', color: minutes < 1 ? 'red' : 'green' }}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={pause} style={buttonStyle}>Pause</button>
        <button onClick={handleReset} style={buttonStyle}>Reset</button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#1e3a8a',
  color: 'white',
  padding: '0.5rem 1rem',
  margin: '0 0.5rem',
  borderRadius: '6px',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
};
