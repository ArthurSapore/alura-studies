import '../style.scss'

type props ={
    tarefa: String,
    tempo: String
}

export default function Item ({tarefa, tempo}: props){
    return(
        <li className='item'>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}