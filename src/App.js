import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }
 
  const toggleMode = () => {
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Text Analyzer - Dark Mode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Text Analyzer - Light Mode';
    }
  }
  return (
    <div>
      
    <Router>
   <Navbar title="Text Analyzer" mode={mode}  toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route exact path="/about" element= {<About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading =" Enter the text to analyze below" mode={mode}/>}/>
   </Routes>
   
   
   </div>
   </Router>
   
    </div>
  );
}

export default App;
