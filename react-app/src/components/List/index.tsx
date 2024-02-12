import Item from './Item';
import './style.scss'
import {ITarefa} from '../../types/tarefa'

/**
 * Outra forma de tipar objetos e funções
 */
interface props {
    tarefas : ITarefa[],
    selecionaTarefa: (tarefa: ITarefa)=> void // método do tipo void que recebe como parâmetro uma tarefa do tipo ITarefa

}

export default function List ({tarefas, selecionaTarefa} : props){
    return(
        <aside className='listaTarefas'>
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa)=>
                    <Item 
                        key = {tarefa.id} 
                        tarefa={tarefa}
                        selecionaTarefa = {selecionaTarefa}
                        /**
                         * spread, passa todos os atributos do objeto como props individuais
                         */
                    />
                )}
            </ul>
        </aside>
    )
} 