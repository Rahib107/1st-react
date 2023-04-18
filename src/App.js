
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import Alert from './components/Alert';
 import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
    message:message,
    type:type
    })
  }

  const toggleMode =() =>{
    if( mode === 'light'){
      setMode('dark');
      document.body.style .backgroundColor = "#1c456b";
      showAlert( " :dark mode is activated","success")
    }
    else{
      setMode('light');
      document.body.style .backgroundColor = "white";
      showAlert(": light mode is activated","success")
  }
}
  return (
<>

<BrowserRouter>

 <Navbar titile ="TextUtlies"mode={mode}  toggleMode={toggleMode} /> 
 <Alert alert ={alert} />

<div className="container my-3"> 
     
<Routes>
          <Route path="/"element ={<TextForm heading="Enter text here"mode={mode} />}/>
          <Route path="/about" element={<About />} />
          
          
          
          
        </Routes>    


 </div>

</BrowserRouter>
</>
    
  );
}

export default App;
