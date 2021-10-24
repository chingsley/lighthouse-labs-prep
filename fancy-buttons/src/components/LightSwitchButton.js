import React from 'react';

import { OFF, ON } from '../constants';

export default function LightSwitchButton(props) {
  const { light, switchLight } = props;

  const handleClick = () => switchLight();

  return (
    <button className='LightSwitchButton' onClick={handleClick}>
      {light === ON && (
        <span>
          <i>💡</i> I'm on!
        </span>
      )}
      {light === OFF && (
        <span className={OFF}>
          <i>💡</i> I'm off!
        </span>
      )}
    </button>
  );
}
