import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [randomPairs, setRandomPairs] = useState([]);
  const [number, setNumber] = useState(1);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const randomizeItems = () => {
    const items = inputText.split('\n').map(item => item.trim()).filter(item => item);
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    // const groups = [];
    
    // for (let i = 0; i < shuffled.length; i += number) {
    //   if (i + 1 < shuffled.length) {
    //     groups.push([shuffled[i], shuffled[i + 1]]);
    //   }
    // }

    // const groups = [];
    //   const group = [];
    //   if (i + 1 < shuffled.length) {
    //     // groups.push([shuffled[i], shuffled[i + 1]]);
    //     for(let y = 0; y < number; i+=1){
    //       group.push(shuffled[i]);
    //     }
    // }

      const perGroup = Math.ceil(number);
      const numOfGroups = Math.ceil(shuffled.length / number)
      const groups = new Array(numOfGroups)
        .fill('')
        .map((_, i) => shuffled.slice(i * perGroup, (i + 1) * perGroup));
    setRandomPairs(groups);
  };

  const getValuesForSelect = () => {
    const options = [];
    for (let i = 0; i < 20; i += 1) {
      options.push(i+1)
    }
    return options
  }


  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    width: '350px',
    textAlign: 'center'
  };

  const textareaStyle = {
    width: '100%',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',

  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 15px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Random Name/Email Groups</h1>
        <textarea
          rows="10"
          style={textareaStyle}
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter names (one per line)"
        />
        <br />
        Number of names/emails per group: <select name="cars" id="cars" onChange={(e) => setNumber(Number(e.target.value))}>
          {getValuesForSelect().map((number) => {return <option key={number} value={`${number}`}>{number}</option>})}
        </select>
        <br />
        <button style={buttonStyle} onClick={randomizeItems}>Randomize</button>
        <ul style={{textAlign:'left', paddingLeft:'0'}}>
          {randomPairs.map((pair, index) => (
            <>
            <li key={index} style={{listStyle:'none'}}>
              <img src={require('./png/free-rocket-icon.png')} style={{width:'15px', paddingRight:'10px'}} />
              <b>{`Group ${index +1}: `}</b>
              {pair.map((value, i) => {
                return <div style={{}}>{pair[i]}</div>})}
            </li>
            <br />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
