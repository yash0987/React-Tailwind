import React from 'react';
import './../index.css';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
        <nav className='flex justify-between px-10 py-3 bg-gray-100'>
            <div className='flex'>
              <h3 className='text-2xl text-gray-600'>{props.title}</h3>
              <input className='mx-10 px-4 rounded-full border-[1px] border-gray-400' type="text" placeholder='Search'/>
            </div>
            <div className='flex'>
                <ul className='flex relative'>
                    <a className='mx-3 my-1 text-gray-800 relative after:content-[""] after:bg-gray-800 after:h-[2px] after:w-full after:absolute after:top-6 after:right-0 after:transition after:scale-x-0 hover:after:scale-x-100' href='./../App.js'>Home</a>
                    <a className='mx-3 my-1 text-gray-700 relative after:content-[""] after:bg-gray-700 after:h-[2px] after:w-full after:absolute after:top-6 after:right-0 after:transition after:scale-x-0 hover:after:scale-x-100' href='./../App.js'>Contact</a>
                    <a className='mx-3 my-1 text-gray-600 relative after:content-[""] after:bg-gray-600 after:h-[2px] after:w-full after:absolute after:top-6 after:right-0 after:transition after:scale-x-0 hover:after:scale-x-100' href='./../App.js'>About</a>
                    <a className='mx-3 my-1 text-gray-500 relative after:content-[""] after:bg-gray-500 after:h-[2px] after:w-full after:absolute after:top-6 after:right-0 after:transition after:scale-x-0 hover:after:scale-x-100' href='./../App.js'>Help</a>
                </ul>
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
