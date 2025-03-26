import { useEffect, useState } from 'react';
import Greeting from './components/Greeting';
import SelectYearMonth from './components/SelectYearMonth';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
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
