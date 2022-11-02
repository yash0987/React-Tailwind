import React, { useState } from 'react';
import './../index.css';

export default function TextBox() {
  const [text, setText] = useState('');

  function convertUppercase(e) {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  }

  function convertLowercase(e){
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  }

  function handleOnChange(e){
    setText(e.target.value);
  }

  function countWord(str) {
    let start = 0, end = 0, count = 0, strLength = str.length;
    let forUpperCase = str[start] >= 'A' && str[start] <= 'Z';
    let forLowercase = str[start] >= 'a' && str[start] <= 'z';
    
    if (forUpperCase || forLowercase) {
      count++;
    }

    while (end < strLength) {
      if (str[end] === ' '){
        start = end + 1;
        forUpperCase = str[start] >= 'A' && str[start] <= 'Z';
        forLowercase = str[start] >= 'a' && str[start] <= 'z';
        if (forUpperCase || forLowercase) {
          count++;
        }
      }
      end++;
    }

    return count;
  }

  return (
    <div>
      <h3 className='mx-4 my-3 text-2xl'>Enter the text</h3>
      <div className='flex'>
        <textarea name="" id="textArea" cols="150" rows="5" value={text} onChange={handleOnChange} className='mx-4 px-2 self-center rounded border-[1px] border-gray-500'></textarea>
      </div>
      <button className='mx-4 my-3 p-3 rounded-md bg-blue-600 text-white' onClick={convertUppercase}>Convert to Uppercase</button>
      <button className='my-3 p-3 rounded-md bg-blue-600 text-white' onClick={convertLowercase}>Convert to Lowercase</button>
      <h3 className='mx-4 my-3 text-2xl'>Your text summary</h3>
      <p className='mx-4 text-xs'>{countWord(text)} words and {text.length} characters</p>
    </div>
  )
}
