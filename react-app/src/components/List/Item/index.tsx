import { ITarefa } from '../../../types/tarefa'
import './style.scss'


/**
 * a interface recebe todas as propriedades do ITarefa, além das novas declaradas
 */
interface props  {
    tarefa: ITarefa,
    selecionaTarefa: (tarefa:ITarefa)=> void //método do tipo void que recebe como paramêtro tarefa do tipo ITarefa
}


export default function Item ({tarefa, selecionaTarefa} :props ){
    return(
        <li className={`item ${tarefa.selecionado? 'itemSelecionado' : '' } ${tarefa.finalizado? 'itemCompletado' : ''}`} onClick={()=> selecionaTarefa(tarefa)}>
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
            {tarefa.finalizado ? <span className="concluido"></span> : undefined}
        </li>
    )
}