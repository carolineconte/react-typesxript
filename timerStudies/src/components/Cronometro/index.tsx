//estilos
import style from './Cronometro.module.scss'
//Components
import { Button } from "../button"
import { Relogio } from "./Relogio"
import { ITarefa } from '../../types/tarefa'
//utils
import { useEffect, useState } from 'react'
import { tempoParaSegundos } from '../../common/utils/time'

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export const Cronometro = ({ selecionado, finalizarTarefa }: Props) => {

  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.time) {
      setTempo(tempoParaSegundos(selecionado.time))
    }
  }, [selecionado])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador === 0) {
        finalizarTarefa()
        return
      }

      setTempo(contador - 1)
      return regressiva(contador - 1)

    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}>
        Start!
      </Button>
    </div>
  )
}
