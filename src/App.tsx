import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SampleComponent from './components/SampleComponent/SampleComponent';

function App() {
  return (
    <React.Fragment>
      <SampleComponent />
      <Counter />
    </React.Fragment>
  );
}

export default App;
