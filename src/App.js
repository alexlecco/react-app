import React from 'react';
import './App.css';

import ContextProvider from './context/provider';
import Form from './components/Form';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextProvider>
          <Form />
          <Dashboard />
        </ContextProvider>
      </header>
    </div>
  );
}

export default App;
