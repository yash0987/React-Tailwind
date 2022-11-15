import React, { useState } from 'react';
import PropTypes from 'prop-types';
import darkLightMode from './../Icon/darkLightMode.png';
import lightDropdown from './../Icon/lightDropdown.png';
import darkDropdown from './../Icon/darkDropdown.png';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {  
  const [show, setShow] = useState('hidden');
  function hideDropBox() {
    if (show === 'hidden') {
      setShow('block');
    }
    else {
      setShow('hidden');
    }
  }

  return (
    <div>
        <nav className={`flex justify-between px-10 py-3 ${props.modeState === 'light'? `${props.bgTheme.navBg} text-white`:'bg-gray-300 text-gray-700'}`}>
            <div className='flex'>
              <h3 className={`text-2xl ${props.modeState === 'light'? `${props.bgTheme.navBg} text-white`:'bg-gray-300 text-gray-700'}`}>{props.title}</h3>
              <input className={`mx-10 px-4 rounded-full ${props.modeState === 'light'? `${props.bgTheme.searchBg} text-white`:'bg-gray-50 text-gray-700'}`} type="text" placeholder='Search'/>
            </div>
            <div className='flex'>
                <ul className='flex relative'>
                    <a className='mx-3 my-1 relative after:content-[""] after:bg-gray-500 after:h-[2px] after:w-full after:absolute after:top-6 after:right-0 after:transition after:scale-x-0 hover:after:scale-x-100' href='./../App.js'>Home</a>
                    <li className='mx-3 my-1' href='./../App.js'>
                      <div className='flex' onClick={hideDropBox}>
                        <div className='relative after:content-[""] after:bg-gray-500 after:h-[2px] after:w-full after:absolute after:top-6 after:right-0 after:transition after:scale-x-0 hover:after:scale-x-100'>Contact</div>
                        <img src={props.modeState === 'light'? lightDropdown : darkDropdown} alt="" className='mt-[10px] mx-1 w-2 h-2' />
                      </div>
                      <ul className={`mt-2 py-2 w-40 rounded absolute bg-opacity-40 ${show} ${props.modeState === 'light'? `${props.bgTheme.navBg} text-white`:'bg-gray-300 text-gray-700'}`}>
                        <li className='px-4 py-2 list-disc list-inside hover:bg-gray-400 '>Email</li>
                        <li className='px-4 py-2 list-disc list-inside hover:bg-gray-400 '>Phone call</li>
                      </ul>
                    </li>
                    <a className='mx-3 my-1 relative after:content-[""] after:bg-gray-500 after:h-[2px] after:w-full after:absolute after:top-6 after:right-0 after:transition after:scale-x-0 hover:after:scale-x-100' href='./../App.js'>About</a>
                    <a className='mx-3 my-1 relative after:content-[""] after:bg-gray-500 after:h-[2px] after:w-full after:absolute after:top-6 after:right-0 after:transition after:scale-x-0 hover:after:scale-x-100' href='./../App.js'>Help</a>
                </ul>
                <div className='flex mt-2 w-4 hover:w-auto'>
                  <button className='w-4 h-4 bg-red-600' onClick={props.redTheme}></button>
                  <button className='w-4 h-4 bg-yellow-600' onClick={props.yellowTheme}></button>
                  <button className='w-4 h-4 bg-blue-600' onClick={props.blueTheme}></button>
                  <button className='w-4 h-4 bg-violet-600' onClick={props.violetTheme}></button>
                </div>
                <button onClick={props.toggleMode}><img src={darkLightMode} alt="" className='ml-4 w-7 rounded-full'/></button>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set string'
};
