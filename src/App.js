import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[alert,setalert]=useState(null);
  const ShowAlert = (message, type)=>{
    setalert({ 
    msg: message,
    type: type
  })
  }
  const[mode,setDarkmode]=useState('light');
  
  const toggleMode=()=>{
    document.title="Text Utils Lightmode"
    if(mode==='light'){
      setDarkmode('dark');
      document.body.style.backgroundColor='grey'
      ShowAlert("Dark mode has been enabled", "success")
      document.title="Text Utils darkmode"
    }
    else{
      setDarkmode('light'); 
      document.body.style.backgroundColor='white'
      ShowAlert("Light mode has been enabled", "success")
      document.title="Text Utils lightmode"
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <Routes>
          <Route path="/about" element={<About />} /> */}
            
          {/* <Route path="/" element={<Textform heading="Enter the text"/>} /> */}
          <Textform heading="Enter the text"/>
            
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
