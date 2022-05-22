import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // console.log('Invoke userEffect');
    document.title = `New Messages (${value})`;
  }, [value])
  // console.log('render component');
  return(
    <React.Fragment>
      <h2>useEffect Basics</h2>
      <h2>{value}</h2>
    <button className='btn' onClick={() => setValue(value + 1)}>Add</button>
    </React.Fragment>
  )
};



export default UseEffectBasics;
