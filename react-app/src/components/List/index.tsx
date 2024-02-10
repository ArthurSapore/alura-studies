import Item from './Item';
import './style.scss'
import {Itarefas} from '../../types/tarefa'

/**
 * Outra forma de tipar objetos e funções
 */

export default function List ({tarefas} : {tarefas : Itarefas[]}){

    return(
        <aside className='listaTarefas'>
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index)=>
                    <Item 
                        key = {index} 
                        tarefa = {item.tarefa}
                        tempo = {item.tempo}
                    />
                )}
            </ul>
        </aside>
    )
} 