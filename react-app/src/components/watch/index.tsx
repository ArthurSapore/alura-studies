import { useEffect, useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import Time from "./Time";
import style from "./Watch.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";

type props = {
    selecionado: ITarefa | undefined,
    finalizarTarefa: ()=> void
}


export default function Watch({selecionado, finalizarTarefa} : props){

    const [tempo, setTempo] = useState<number>();
    
    /**
     * useEffect utiliza dois parâmetros, o primeiro é a função que será executada e o segundo a variável que controlola-rá quando será executado
     * Neste caso, a função será executada toda vez que o valor da variável 'selecionado' for alterado.
     */
    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])

    function regressiva (contador : number = 0){
        /**
         * setTimeout -> primeiro parâmetro, a função que deseja executar, segundo parâmetro, intervalo de tempo que irá ser executado aquela função (tempo dado em milisegundos)
         */
        setTimeout(()=>{
            if(contador > 0){
                setTempo(contador -1);
                return regressiva(contador-1);
            }   
            finalizarTarefa();
        }, 1000)
    }
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Time tempo ={tempo}/>
            </div>
            <Button onClick={()=>regressiva(tempo)}>
                Começar!
            </Button>
        </div>
    )
}