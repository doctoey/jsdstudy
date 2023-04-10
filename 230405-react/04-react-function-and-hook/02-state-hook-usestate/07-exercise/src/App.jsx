import React, { useState } from 'react';

function App() {
    // adding state here.
  const [showMes, setMes] = useState()
  const [choices, setChoices] = useState()
  const handleClick = (value) => {
    // code here.
    setChoices(value);
  };

// let DivElement = <div></div>

  return (
    <div>
      <button onClick={() => handleClick('Fullname')} >Fullname</button>
      <button onClick={() => handleClick('Age')} >Age</button>
      <button onClick={() => handleClick('Picture')} >Picture</button>
      {/* <button onClick={() => setChoices('Picture')} >Picture</button> */}
      {/* <button onClick={handleClick} >Picture</button> */}
      {/* <button handleClick('Age') >Picture</button> */}
      <DisplayInfo choices={choices} />
    </div>
  );
}

function DisplayInfo(props) {

  let DivElement;
  if (props.choices === 'Fullname') {
    DivElement = <h2>John Doe</h2>;
  } else if (props.choices === 'Age') {
    DivElement = <h2>30</h2>;
  } else if (props.choices === 'Picture') {
    DivElement = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    DivElement = <p>Please select an option.</p>;
  }

  return (
    <div>
      {DivElement}
    </div>
  );
}

export default App;
