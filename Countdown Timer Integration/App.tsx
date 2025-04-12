// src/App.tsx
import React from 'react';
import Timer from './components/Timer';

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120); // 2 minutes from now

  return (
    <div>
      <Timer expiryTimestamp={time} />
    </div>
  );
}

export default App;
