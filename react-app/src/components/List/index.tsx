import Item from './Item';
import './style.scss'

export default function List (){

    const tarefas = [{
        tarefa: 'React',
        tempo: '2:00:00'
    },
    {
        tarefa: 'Javascript',
        tempo: '1:30:00'
    },
    {
        tarefa: 'Python',
        tempo: '1:10:00'
    }];

    return(
        <aside className='listaTarefas'>
            <h2>Estudos do dia</h2>
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