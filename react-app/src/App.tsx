import React from 'react';
import './styles/app.scss'
import List from './components/List';
import Form from './components/Form';
import Watch from './components/watch';

function App() {
  return (
    <div className="AppStyle">
      <Form/>
      <List/>
      <Watch/> 
    </div>
    
  );
}

export default App;
