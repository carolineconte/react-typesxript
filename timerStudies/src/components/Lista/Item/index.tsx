//styles
import { ITarefa } from '../../../types/tarefa'
import style from './Item.module.scss'

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export const ListItem = (
  {
    task,
    time,
    selected,
    completed,
    id,
    selecionaTarefa
  }: Props) => {

  return (
    <li className={`${style.item} 
    ${selected ? style.itemSelecionado : ''} 
    ${completed ? style.itemCompletado : ''}`} 
    onClick={() => !completed && selecionaTarefa({
      task, time, selected, completed, id
    })}>
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.concluido} aria-label='Tarefa completada'></span>}
    </li>
  )
}
