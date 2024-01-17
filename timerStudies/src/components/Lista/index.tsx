//styles
import style from './List.module.scss'

import { ITarefa } from '../../types/tarefa';
//Componets
import { ListItem } from './Item';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada:ITarefa) => void;
  // void = funcao nao retorna nada
}

//ITarefa -> INDICAR QUE E UMA ARRAY DAQUELE TIPO DE OBJETO
function List({ tarefas, selecionaTarefa } : Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {
          tarefas.map(item => (
            <ListItem key={item.id}
            selecionaTarefa = {selecionaTarefa}
              {...item} />
          ))
        }
      </ul>
    </aside>
  )
}

export default List;