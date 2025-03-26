import { useEffect, useState } from 'react';
import Greeting from './components/Greeting';
import SelectYearMonth from './components/SelectYearMonth';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/message`)
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>📦 Literable Archive</h1>
      <p>{msg}</p>
      <Greeting name = 'USER' />
      <SelectYearMonth />
    </div>
  );
}

export default App;
