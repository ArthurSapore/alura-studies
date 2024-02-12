export function tempoParaSegundos (tempo:string){
    const [horas='0', minutos='0', segundos='0'] = tempo.split(":");
    const horaEmSegundos = Number(horas)*3600
    const minutoEmSegundos = Number(minutos)*60
    return horaEmSegundos + minutoEmSegundos + Number(segundos)

}