import React, { useState } from 'react';
import './App.css';

function App() {
  const [matrix, setMatrix] = useState(Array(9).fill(null)); 
  const [clickOrder, setClickOrder] = useState([]); 

  const handleClick = (index) => {
    if (matrix[index] === null) { 
      const newMatrix = [...matrix];
      newMatrix[index] = 'green'; 
      setMatrix(newMatrix);

      setClickOrder([...clickOrder, index]); 
    }

    if (index === 8) { 
      changeColorsInSequence();
    }
  };

  const changeColorsInSequence = () => {
    clickOrder.forEach((index, i) => {
      setTimeout(() => {
        const newMatrix = [...matrix];
        newMatrix[index] = 'orange'; 
        setMatrix(newMatrix);
      }, i * 500); 
    });
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ><h1 className='box-text'>*</h1></div>
      ))}
    </div>
  );
}

export default App;
