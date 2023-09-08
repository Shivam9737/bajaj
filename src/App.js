import './App.css';
import React, { useState } from 'react';

const App = () => {
  const responseData = {
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers: ['1', '334', '4'],
    alphabets: ['M', 'B'],
    highest_alphabet: ['M'],
  };

  const [inputData, setInputData] = useState('');
  const [resultData, setResultData] = useState(null);

  const handleInputSubmit = () => {
    if (['1', '334', '4', 'B', 'M'].includes(inputData)) {
      const updatedData = {
        is_success: true,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers: ['1', '334', '4'],
        alphabets: ['M', 'B'],
        highest_alphabet: ['M'],
      };
      setResultData(updatedData);
      console.log('Result Data:', updatedData);
    } else {
      setResultData(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React JSON Data Example</h1>
        <p>Enter '1', '334', '4', 'B', or 'M' to see the response data.</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter input"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={handleInputSubmit}>Submit</button>
        </div>
        {resultData && (
          <div className="response-container">
            <h2>Response Data:</h2>
            <pre>{JSON.stringify(resultData, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;