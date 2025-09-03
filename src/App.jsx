import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, [])

  return (
   <div>
    {time.toLocaleTimeString()}
   </div>
  );
}

export default App;
