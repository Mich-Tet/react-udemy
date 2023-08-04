import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOut from './components/UI/Button/Demo/DemoOut';

function App() {
  const [newPara, setNewPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('xd');

  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      setNewPara((prevNewPara) => !prevNewPara);
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOut show={newPara} />
      <Button onClick={allowToggleHandler}>Allow</Button>
      <Button onClick={toggleHandler}>Show para</Button>
    </div>
  );
}

export default App;
