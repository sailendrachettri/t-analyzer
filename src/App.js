import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  // STATE VARIABLES
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // FUNCTIONS AND METHODS
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = 'rgb(24 30 36)';
    }
    else {
      setMode('light');
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = '#f9f8fa';
    }
  }

  return (
    <>
      <Navbar title="Tanalyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm mode={mode} showAlert={showAlert} />
    </>
  );
}
export default App;
