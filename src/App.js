import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


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
      <Router>
        <Navbar title="Tanalyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route exact path='/about' element={<About mode={mode} />} />
        </Routes>

      </Router>
    </>
  );
}
export default App;
