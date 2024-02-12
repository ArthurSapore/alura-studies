import { ITarefa } from '../../../types/tarefa'
import style from'./Time.module.scss'

type props = {
    selecionado: ITarefa | undefined
}

export default function Time( {selecionado}: props){

    return(
        <>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </>
    )
}