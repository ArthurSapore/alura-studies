import './style.scss'

export default function List (){

    const tarefas = [{
        tarefa: 'React',
        tempo: '2:00:00'
    },
    {
        tarefa: 'Javascript',
        tempo: '1:30:00'
    }];

    return(
        <aside className='listaTarefas'>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index)=>
                    <li className='item' key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                )}
            </ul>
        </aside>
    )
} 