import style from './Form.module.scss'
import Button from "../Button";
/**
 * CSS Modules, importante para não haver sobreposição de estilização.
 * Altera o nome da classe adicionando um hash.
 * Elimina a necessidade de se preocupar em criar classes css com o mesmo nome.
 *
 */
export default function Form (){
    return(
        <form action="" className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" min="00:00:00" max="01:30:00" id="tempo" placeholder="O que você quer estudar" required />
            </div>
            <Button>Adicionar</Button>
        </form>
    )
}