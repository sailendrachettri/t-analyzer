import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(24 30 36)';
    }
    else {
      document.body.style.backgroundColor = '#f9f8fa';
      setMode('light');
    }
  }

  return (
    <>
      <Navbar title="Tanalyzer" mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode} />
    </>
  );
}
export default App;
