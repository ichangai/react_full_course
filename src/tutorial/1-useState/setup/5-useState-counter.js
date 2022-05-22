import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const decreaseNo = () => {
    setValue(value -1);
  }

  const addNo = () => {
    setValue(value +1);
  }

  const resetNo = () => {
    setValue(0);
  }

  const complexAdd = () => {
    setTimeout(() => {
        // setValue( value +1)
        setValue((preValue) =>{
            return preValue + 1;
        })
    }, 2000);
  }
   return (
    <React.Fragment>
      <section style={{ margin: '4rem 0' }}>
          <h2>Regular Counter</h2>
          <h1>{ value }</h1>
        <button className="btn" onClick={ () => decreaseNo()}>decrease</button>
         <button className="btn" onClick={() => resetNo()}>reset</button>
         <button className="btn" onClick={() => addNo()}>increase</button>
      </section>

       <section style={{ margin: '4rem 0' }}>
         <h2>More Complex Counter</h2>
         <h1>{value}</h1>
         <button className="btn" onClick={() => complexAdd()}>Increase Later</button>
       </section>
    </React.Fragment>
  )

};

export default UseStateCounter;
