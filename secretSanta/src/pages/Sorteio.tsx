import { useEffect, useState } from "react"
import { MdOutlineCasino } from "react-icons/md";

import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"
import styled from "styled-components"

const SectionStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    text-align: center;
    color: rgba(75, 105, 253, 0.99);
  }
  p{
    color: #444;
    text-align: center;
  }
  h3{
    color: rgba(254, 101, 43, 0.99);
    background-color: #ffffff;
    border: 2px solid rgba(254, 101, 43, 0.99);
    padding: 1rem;
    width: 50%;
    text-align: center;
  }
`
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  select{
    border-radius: 37.5px;
    border: 2px solid #000;
    background: #FFF;
    box-shadow: 4px 4px 0px 0px #000;
    padding: 18px 40px;
    width: 100%;
  }
`

const ButtonStyled = styled.button`
  border-radius: 37.5px;
  border: 2px solid #000;
  background: #FE652B;
  box-shadow: 2px 2px #000;
  padding: 18px 40px;
  color: #FFF;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.25px;
  display: flex;
  align-items: center;
  gap: 5px;
  :first-child{
    font-size: 2rem;
  }
`

export const Sorteio = () => {
  const participantes = useListaDeParticipantes()
  const resultado = useResultadoSorteio()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const sortear = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setAmigoSecreto('')
    }, 5000)

  },[amigoSecreto])

  return (
    <SectionStyled onSubmit={sortear}>
      <h2>Quem vai tirar o papelzinho?</h2>
      <FormStyled action="">
        <select required
          placeholder="Selecione o seu nome"
          name="Participantes da vez"
          value={participanteDaVez}
          onChange={e => setParticipanteDaVez(e.target.value)}
        >
          <option>Selecione seu nome</option>
          {participantes.map(participante =>
            <option key={participante}>{participante}</option>)
          }
        </select>
        <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
        <ButtonStyled><MdOutlineCasino/> Sortear!</ButtonStyled>
      </FormStyled>
      {amigoSecreto && <h3 role="alert">{amigoSecreto}</h3>}
      <img src="/Avião-papel 2.png" alt="" />
    </SectionStyled>
  )
}