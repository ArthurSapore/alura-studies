import React from 'react';
import './styles/app.scss'
import List from './components/List';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  return (
    <div className="AppStyle">
      <Form/>
      <List/>
    </div>
    
  );
}

export default App;
