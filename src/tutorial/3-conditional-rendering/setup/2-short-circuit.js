import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(false);
  const [isError, setIsError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  // const handleError = () => {
  //   if (isError === false) {
  //     setIsError(true);
  //   } else {
  //     setIsError(false);
  //   }
  // }

  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}

      {/* <h1>{text || 'John Doe'}</h1> */}
      {!isError && <h1>Error...</h1>}
      <button className='btn' onClick={() => setIsError(!isError)}>Toggle</button>
    </React.Fragment>
  )
};

export default ShortCircuit;
