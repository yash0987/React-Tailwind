import React, { useState } from 'react';

export default function TextBox(props) {
  const [text, setText] = useState('');

  function convertUppercase() {
    if (text !== '') {
      let upperCaseText = text.toUpperCase();
      setText(upperCaseText);
      props.setAlertContent('Success', 'Text converted to uppercase', 'bg-green-400');
    }
  }

  function convertLowercase() {
    if (text !== '') {
      let lowerCaseText = text.toLowerCase();
      setText(lowerCaseText);
      props.setAlertContent('Success', 'Text converted to lowercase', 'bg-green-400');
    }    
  }

  function handleOnChange(e) {
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

  function clearText() {
    if (text !== '') {
      props.setAlertContent('Warning', 'Clear text', 'bg-yellow-100');
      setText('');
    }
  }

  function removeExtraSpace() {
    let str = text, ans = "";
    let strLength = str.length;
    for (let i = 0; i < strLength; i++) {
      if (str[i] === ' '){
        ans += str[i];
        while (str[i] === ' ') {
          i++;
        }

        if (str[i] !== undefined) {
          ans += str[i];
        }
      }
      else {
        ans += str[i];
      }
    }

    if (text !== '') {
      props.setAlertContent('Danger', 'Extra spaces removed', 'bg-red-400');
    }
    setText(ans);
  }

  function fuckingFeature() {
    // 1. hightlight text with yellow color which shown as "highlight(text content ....)"
    // 2. detect email ID and underline it
  }

  return (
    <div className='flex justify-center py-10'>
      <div>
        <h3 className={`mx-4 my-3 text-2xl ${props.modeState === 'light'? 'text-white' : 'text-black'}`}>Enter the text</h3>
        <div className='flex'>
          <textarea name="" id="textArea" cols="150" rows="5" value={text} onChange={handleOnChange} className={`mx-4 px-2 self-center rounded border-[1px] ${props.modeState === 'light'? `${props.bgTheme.bodyBg} ${props.bgTheme.borderBg} text-white`: 'bg-white border-gray-500 text-black'}`}></textarea>
        </div>
        <button className={`mx-4 my-3 px-3 py-2 rounded-md text-white ${props.modeState === 'light'? `${props.bgTheme.buttonBg} ${props.bgTheme.activeBtn}` : `bg-blue-600 active:bg-blue-700`}`} onClick={convertUppercase} >Uppercase</button>
        <button className={`my-3 px-3 py-2 rounded-md text-white ${props.modeState === 'light'? `${props.bgTheme.buttonBg} ${props.bgTheme.activeBtn}` : 'bg-blue-600 active:bg-blue-700'}`} onClick={convertLowercase}>Lowercase</button>
        <button className={`mx-4 my-3 px-3 py-2 rounded-md text-white ${props.modeState === 'light'? `${props.bgTheme.buttonBg} ${props.bgTheme.activeBtn}` : 'bg-blue-600 active:bg-blue-700'}`} onClick={clearText}>Clear</button>
        <button className={`my-3 px-3 py-2 rounded-md text-white ${props.modeState === 'light'? `${props.bgTheme.buttonBg} ${props.bgTheme.activeBtn}` : 'bg-blue-600 active:bg-blue-700'}`} onClick={removeExtraSpace}>Remove spaces</button>
        <button className={`mx-4 my-3 px-3 py-2 rounded-md text-white ${props.modeState === 'light'? `${props.bgTheme.buttonBg} ${props.bgTheme.activeBtn}` : 'bg-blue-600 active:bg-blue-700'}`} onClick={fuckingFeature}>Highlight</button>
        <h3 className={`mx-4 my-3 text-2xl ${props.modeState === 'light'? 'text-white' : 'text-black'}`}>Your text summary</h3>
        <p className={`mx-4 text-xs ${props.modeState === 'light'? 'text-white' : 'text-black'}`}>{countWord(text)} words and {text.length} characters</p>
        <h3 className={`mx-4 my-3 text-2xl ${props.modeState === 'light'? 'text-[#DBD8E3]' : 'text-black'}`}>Preview</h3>
        <p className={`mx-4 text-xs inline-block ${props.modeState === 'light'? 'text-white' : 'text-black'}`}>{text}</p>
      </div>
    </div>
  )
}
