import React, { useState } from 'react';
import './styles/app.scss'
import List from './components/List';
import Form from './components/Form';
import Watch from './components/watch';

function App() {

  /**
   * O react só consegue passar objetos de um elemento pai para o filho, 
   * 
   */
  const [tarefas, setTarefas] = useState([{
      tarefa: 'React',
      tempo: '2:00:00'
    },
    {
        tarefa: 'Javascript',
        tempo: '1:30:00'
    },
    {
        tarefa: 'Python',
        tempo: '1:10:00'
    }
  ]);

  return (
    <div className="AppStyle">
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas}/>
      <Watch/> 
    </div>
    
  );
}

export default App;
