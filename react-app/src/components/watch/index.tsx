import { useState } from "react";
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
    if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo));
    }

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