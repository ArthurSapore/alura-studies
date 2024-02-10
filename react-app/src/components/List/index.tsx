import Item from './Item';
import './style.scss'
import {ITarefa} from '../../types/tarefa'

/**
 * Outra forma de tipar objetos e funções
 */

export default function List ({tarefas} : {tarefas : ITarefa[]}){
    return(
        <aside className='listaTarefas'>
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index)=>
                    <Item 
                        key = {index} 
                        {...tarefa}
                        /**
                         * spread, passa todos os atributos do objeto como props individuais
                         */
                    />
                )}
            </ul>
        </aside>
    )
} 