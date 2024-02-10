import { ITarefa } from '../../../types/tarefa'
import '../style.scss'


export default function Item ({tarefa, tempo}: ITarefa){
    return(
        <li className='item'>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}