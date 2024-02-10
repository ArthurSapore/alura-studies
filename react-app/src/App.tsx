import React, { useState } from 'react';
import './styles/app.scss'
import List from './components/List';
import Form from './components/Form';
import Watch from './components/watch';
import { ITarefa } from './types/tarefa';

function App() {

  /**
   * O react só consegue passar objetos de um elemento pai para o filho, 
   * 
   */
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className="AppStyle">
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas}/>
      <Watch/> 
    </div>
    
  );
}

export default App;
