import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
//style
import style from './Form.module.scss'
//components
import { Button } from "../button";
import { ITarefa } from "../../types/tarefa";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Form({ setTarefas }: Props) {

  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState('00:00')

  function addNewTask(e: React.FormEvent) {
    e.preventDefault()

    setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          task: tarefa,
          time: tempo,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ])

    setTarefa('')
    setTempo('00:00')
  }

  return (
    <form className={style.novaTarefa} onSubmit={addNewTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Adicione um nove estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que voce quer estudar?"
          value={tarefa}
          onChange={e => setTarefa(e.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          value={tempo}
          onChange={e => setTempo(e.target.value)}
          required
        />
      </div>
      <Button type="submit">
        New task
      </Button>
    </form>
  )

}


export default Form