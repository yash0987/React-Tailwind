import React from 'react';
import warningIcon from './../Icon/warning.png';
import dangerIcon from './../Icon/danger.png';
import successIcon from './../Icon/success.png';
import normalIcon from './../Icon/normalAlert.png';

export default function Alert(props) {

  function alertIcon() {
    if (props.alertContent.alertType === 'Danger') {
      return dangerIcon;
    }
    else if (props.alertContent.alertType === 'Success') {
      return successIcon;
    }
    else if (props.alertContent.alertType === 'Warning') {
      return warningIcon;
    }
    return normalIcon;
  }

  return (
    <div className={`${props.alertContent.showAlert} justify-between absolute w-full ${props.alertContent.bgColor}`}>
      <div className='flex px-7 py-1'>
        <img src={alertIcon()} alt="" className='mx-2 w-7'/>
        <p>{props.alertContent.message}</p>
      </div>
    </div>
  )
}
