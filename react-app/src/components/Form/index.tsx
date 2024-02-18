import style from './Form.module.scss'
import Button from "../Button";
import { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import {v4 as uuidv4} from 'uuid';

/**
 * É possível criar tipagens universais e reaproveita-las em várias partes do código
 */
interface ISetTarefas {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> // setTarefas é um hook de um array de Itarefas 
}
/**
 * CSS Modules, importante para não haver sobreposição de estilização.
 * Altera o nome da classe adicionando um hash.
 * Elimina a necessidade de se preocupar em criar classes css com o mesmo nome.
 *
 */
export default function Form ({setTarefas} : ISetTarefas){
    const [tarefa, setTarefa] = useState<string>('');
    const [tempo, setTempo] = useState<string>('00:00');

    function adicionarTarefas(event: React.FormEvent){
        event.preventDefault();
        setTarefas(tarefas => [...tarefas, 
            {   tarefa, 
                tempo, 
                selecionado: false, 
                finalizado: false, 
                id: uuidv4()  
            }]);
        setTarefa('');
        setTempo('00:00');
    }

    return(
        <form action="" className={style.novaTarefa} onSubmit={adicionarTarefas}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input  type="text" name="tarefa" onChange={(event)=> setTarefa(event.target.value)} value={tarefa} id="tarefa" placeholder="O que você quer estudar" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" min="00:00:00" onChange={(event) => setTempo(event.target.value)} value={tempo} max="23:59:59" id="tempo" required />
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}