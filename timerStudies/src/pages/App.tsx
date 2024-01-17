/* eslint-disable @typescript-eslint/no-unused-vars */
//styles
import style from './App.module.scss'
//Hooks
import { useState } from 'react';
//components
import List from "../components/Lista"
import Form from "../components/form"
import { Cronometro } from '../components/Cronometro'
import { ITarefa } from '../types/tarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selected:tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id){
            return{
              ...tarefa,
              selected:false,
              completed: true,
            }
          }
          return tarefa
        })
      )
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  )
}

export default App
