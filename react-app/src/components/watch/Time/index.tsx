import style from'./Time.module.scss'

type props = {
    tempo: number | undefined
}


export default function Time({tempo = 0}: props){ //Se tempo for undefined, então o valor dele será 0 
    const minutos = Math.floor(tempo/60);
    const minutosDezenas = Math.floor(minutos/10);
    const minutosUnidades = minutos%10;
    const segundos = tempo % 60;
    const segundosDezenas = Math.floor(segundos/10);
    const segundosUnidades = segundos%10;

    return(
        <>
            <span className={style.relogioNumero}>{minutosDezenas}</span>
            <span className={style.relogioNumero}>{minutosUnidades}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundosDezenas}</span>
            <span className={style.relogioNumero}>{segundosUnidades}</span>
        </>
    )
}