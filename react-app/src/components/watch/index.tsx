import Button from "../Button";
import Time from "./Time";
import style from "./Watch.module.scss";

export default function Watch(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Time/>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}