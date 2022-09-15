import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTemperatureLow } from '@fortawesome/free-solid-svg-icons'

import './style.css'

const Temperature = () => {
  const [isTemp, setTemp] = useState(33);

  return (
    <div className='head'>
    <div className='body'>
      <div className='main'>
        <FontAwesomeIcon className='icon' icon={faTemperatureLow} color="black" />    {isTemp}
      </div>
      <div className='child'>
        <button className='green' onClick={() => setTemp(isTemp + 1)}><FontAwesomeIcon icon={faPlus} color="green" size="6px" /></button>
        <button className='red' onClick={() => setTemp(isTemp - 1)}><FontAwesomeIcon icon={faMinus} color="red" size="6px" /></button>
      </div>

    </div>
    </div>
  )

}

ReactDOM.render(<Temperature />, document.querySelector("#root"));