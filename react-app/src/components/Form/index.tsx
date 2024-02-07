import Button from "../Button";

export default function Form (){
    return(
        <form action="">
            <div>
                <label htmlFor="tarefa">Adicione o que deseja estudar</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required />
            </div>
            <div>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" min="00:00:00" max="01:30:00" id="tempo" placeholder="O que você quer estudar" required />
            </div>
            <Button/>
        </form>
    )
}