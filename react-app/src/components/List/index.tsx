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
        <aside>
            <h2>Estudos do dia</h2>
            {tarefas.map((item, index)=>
                <div key={index}>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>
                </div>
            )}
        </aside>
    )
} 