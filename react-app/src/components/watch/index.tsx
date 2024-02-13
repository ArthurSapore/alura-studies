import { useEffect, useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import Time from "./Time";
import style from "./Watch.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";

type props = {
    selecionado: ITarefa | undefined
}


export default function Watch({selecionado} : props){

    const [tempo, setTempo] = useState<Number>();
    
    /**
     * useEffect utiliza dois parâmetros, o primeiro é a função que será executada e o segundo a variável que controlola-rá quando será executado
     * Neste caso, a função será executada toda vez que o valor da variável 'selecionado' for alterado.
     */
    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Time selecionado = {selecionado}/>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}