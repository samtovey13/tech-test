import React, { useState } from 'react';
import '../styles/App.css';
import Search from './Search';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img 
        className="logo" 
        alt="NASA logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
        data-testid="NASA-logo"
      />
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
