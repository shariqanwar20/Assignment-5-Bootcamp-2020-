import React, { useState } from 'react'
import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent';
import harvard from './harvard.png'

function App() {
  let countState = useState(1);

  return (
    <div className='App'>
      <CounterContext.Provider value={countState}>
        <Parent imgUrl={harvard}/>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
