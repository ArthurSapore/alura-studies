import style from './Form.module.scss'
import Button from "../Button";
import { useState } from 'react';
import { Itarefas } from '../../types/tarefa';

/**
 * É possível criar tipagens universais e reaproveita-las em várias partes do código
 */
interface ISetTarefas {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefas[]>>
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
        setTarefas(tarefas => [...tarefas, {tarefa, tempo }]);
    }

    return(
        <form action="" className={style.novaTarefa} onSubmit={adicionarTarefas}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input  type="text" name="tarefa" onBlur={(event)=> setTarefa(event.target.value)} id="tarefa" placeholder="O que você quer estudar" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" min="00:00:00" onChange={(event) => setTempo(event.target.value)} value={tempo} max="23:59:" id="tempo" placeholder="O que você quer estudar" required />
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}