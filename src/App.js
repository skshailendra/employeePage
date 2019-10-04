import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import EmployeeApp from './EmployeeApp';

function App() {
  return (
      <BrowserRouter>
        <EmployeeApp/>
      </BrowserRouter>
  );
}

export default App;
