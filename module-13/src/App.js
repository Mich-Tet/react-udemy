import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOut from './components/UI/Button/Demo/DemoOut';

function App() {
  const [newPara, setNewPara] = useState(false);

  console.log('xd');

  const toggleHandler = useCallback(() => {
    setNewPara((prevNewPara) => !prevNewPara);
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOut show={false} />
      <Button onClick={toggleHandler}>Show para</Button>
    </div>
  );
}

export default App;
