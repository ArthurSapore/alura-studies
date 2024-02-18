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
    if(!tarefaSelecionada.finalizado){
      setSelecionado(tarefaSelecionada);

      /**
       * Defino o 'tarefas'(definido junto com o setTarefas) como 'tarefasAnteriores' em seguida, percorro o objeto retornando cada item como 'tarefaAnterior' 
       * dou um spread para acessar as propriedades do item e atualizo o valor do 'selecionado' condicionalmente.
       */
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefaAnterior =>({
        ...tarefaAnterior,
        selecionado: tarefaAnterior.id === tarefaSelecionada.id ? true : false
      })))

    }
    
  }

  function finalizarTarefa (){

    if(selecionado){
      setSelecionado(undefined);
      /**
       * defino o 'tarefas'(definido junto com o setTarefas) como 'tarefasAnteriores', a partir dele faço uma iteração no objeto e retorno cada elemento como 'tarefa'
       */
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>{
        if(tarefa.id === selecionado.id){
          return {
            //dou um spread no objeto, retornando ele com as mesmas propriedades e valores, apenas atualizando o 'selecionado' e o 'finalizado'
            ...tarefa,
            selecionado: false,
            finalizado: true
          }
        }
        return tarefa;
      }))
    }
  }


  return (
    <div className="AppStyle">
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Watch selecionado ={selecionado} finalizarTarefa={finalizarTarefa}/> 
    </div>
    
  );
}

export default App;
