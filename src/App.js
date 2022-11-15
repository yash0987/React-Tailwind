import './App.css';
import './index.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextBox from './components/TextBox';
// import About from './components/About';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');

  function modeColor() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      setAlertContent('Success', 'Light mode enable', 'bg-green-400');
    }
    else {
      setMode('light');
      setBackgroundTheme({navBg: 'bg-[#2A2438]', bodyBg: 'bg-[#352F44]', searchBg: 'bg-[#3a3645]', buttonBg: 'bg-[#8052ff]'});
      document.body.style.backgroundColor = '#352F44';
      setAlertContent('Success', 'Dark mode enable', 'bg-green-400');
    }
  }

  const [alert, setAlert] = useState({
    alertType: 'normal',
    message: 'This is an alert',
    showAlert: 'hidden',
    bgColor: 'bg-blue-400'
  });

  function setAlertContent(type, msg, color) {
    setAlert({
      alertType: type,
      message: msg,
      showAlert: 'flex',
      bgColor: color
    })

    setTimeout(() => {
      setAlert({
        alertType: 'normal',
        message: 'This is an alert',
        showAlert: 'hidden',
        bgColor: 'bg-blue-400'
      })
    }, 2000);
  }

  const [backgroundTheme, setBackgroundTheme] = useState({
    navBg: 'bg-[#2A2438]',
    bodyBg: 'bg-[#352F44]',
    searchBg: 'bg-[#3a3645]',
    buttonBg: 'bg-[#8052ff]',
    activeBtn: 'active:bg-[#633fc8]',
    borderBg: 'bg-[#625e72]'
  });

  function redTheme() {
    setBackgroundTheme({
      navBg: 'bg-[#311D3F]', 
      bodyBg: 'bg-[#522546]', 
      searchBg: 'bg-[#453641]', 
      buttonBg: 'bg-[#E23E57]',
      activeBtn: 'active:bg-[#c83f58]',
      borderBg: 'border-[#725e71]'
    });

    if (mode === 'light') {
      document.body.style.backgroundColor = '#522546';
    }
  }

  function yellowTheme() {
    setBackgroundTheme({
      navBg: 'bg-[#373824]', 
      bodyBg: 'bg-[#43442f]', 
      searchBg: 'bg-[#454536]', 
      buttonBg: 'bg-[#bbb53b]',
      activeBtn: 'active:bg-[#c6c83f]',
      borderBg: 'border-[#72725e]'
    });

    if (mode === 'light') {
      document.body.style.backgroundColor = '#43442f';
    }
  }
  
  function blueTheme() {
    setBackgroundTheme({
      navBg: 'bg-[#242538]', 
      bodyBg: 'bg-[#302f44]', 
      searchBg: 'bg-[#373645]', 
      buttonBg: 'bg-[#5852ff]',
      activeBtn: 'active:bg-[#3f44c8]',
      borderBg: 'border-[#605e72]'
    });

    if (mode === 'light') {
      document.body.style.backgroundColor = '#302f44';
    }
  }
  
  function violetTheme() {
    setBackgroundTheme({
      navBg: 'bg-[#2A2438]', 
      bodyBg: 'bg-[#352F44]', 
      searchBg: 'bg-[#3a3645]', 
      buttonBg: 'bg-[#8052ff]',
      activeBtn: 'active:bg-[#633fc8]', 
      borderBg: 'border-[#625e72]'
    });

    if (mode === 'light') {
      document.body.style.backgroundColor = '#352F44';
    }
  }
  
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="React Tailwind" toggleMode={modeColor} modeState={mode} redTheme={redTheme} yellowTheme={yellowTheme} blueTheme={blueTheme} violetTheme={violetTheme} bgTheme={backgroundTheme}/>
        <Alert alertContent={alert}/>
        <TextBox modeState={mode} setAlertContent={setAlertContent} bgTheme={backgroundTheme} />
        {/* <Routes> */}
          {/* <Route path='/' element={<TextBox modeState={mode} setAlertContent={setAlertContent} bgTheme={backgroundTheme} />} /> */}
          {/* <Route path='/about' element={<About/>} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;