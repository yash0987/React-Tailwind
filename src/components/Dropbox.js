import React from 'react';
import './../index.css';

export default function Dropbox() {
  return (
    <div>
      <div className='p-5 w-40 bg-teal-500'>Dropdown</div>
      <div className='dropbox relative flex flex-col bg-gray-200 shadow-md w-32'>
        <a className='px-5 py-2 border-b-2 border-gray-400' href='./../App.js'>Link 1</a>
        <a className='px-5 py-2 border-b-2 border-gray-400' href='./../App.js'>Link 2</a>
        <a className='px-5 py-2 border-b-2 border-gray-400' href='./../App.js'>Link 3</a>
        <a className='px-5 py-2 border-b-2 border-gray-400' href='./../App.js'>Link 4</a>
      </div>
    </div>
  )
}
