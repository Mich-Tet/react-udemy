import React from 'react';

const DemoOut = (props) => {
  console.log('demo');
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default React.memo(DemoOut);
