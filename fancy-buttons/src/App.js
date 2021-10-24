import React, { useState } from 'react';

import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

import { OFF, ON } from './constants';

function App() {
  const [light, setLight] = useState(OFF);
  const dark = light === 'off' ? 'dark' : '';

  const switchLight = () => setLight(light === ON ? OFF : ON);

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;