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
   * Normalmente esse tipo de controle é feito através do context API.
   */
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    
    setSelecionado(tarefaSelecionada);

    /**
     * Percorre todas as tarefas atualizando seus valores, 
     * se o id for igual ao da tarefa selecionada, true, senão, false
     */
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefaAnterior =>({
      ...tarefaAnterior,
      selecionado: tarefaAnterior.id === tarefaSelecionada.id ? true : false
    })))
  }


  return (
    <div className="AppStyle">
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Watch selecionado ={selecionado}/> 
    </div>
    
  );
}

export default App;
