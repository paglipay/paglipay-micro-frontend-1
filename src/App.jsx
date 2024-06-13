import React from 'react';
import ReactDOM from 'react-dom';
import MicroFrontend1 from './components/MicroFrontend1';

const App = () => (
  <div>
    <h1>Micro-frontend 1</h1>
    <MicroFrontend1 />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
