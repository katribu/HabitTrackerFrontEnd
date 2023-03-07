import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {


  return (
    <div className="App">
      <Header />

      <div className="main">
        <div>
          <h5>Add a new category</h5>
          <input type="text" placeholder="New category"/>
        </div>

        <div className="add-habit-div">
          <h5> Add habit</h5>
          <input type="text" placeholder="Select habit"/>
          <input type="text" placeholder="Date" />
          <button type="submit" className="submit-btn">Add</button>
        </div>

      </div>
    </div>
  );
}

export default App;
