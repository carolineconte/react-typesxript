import { useRef, useState } from "react"
import styled from "styled-components"
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante"
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro"

const FormStyled = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const InputStyled = styled.input`
 border-radius: 37.5px 0px 0px 37.5px;
 border: 2px solid #000;
 background: #FFF;
 box-shadow: 4px 4px 0px 0px #000;
 padding: 18px 40px 18px ;
 width: 100%;
 @media screen and (max-width: 800px) {
  padding: 18px ;
  }
`
const ButtonStyled = styled.button`
  border-radius: 0px 37.5px 37.5px 0px;
  border: 2px solid #000;
  background: #C4C4C4;
  box-shadow: 4px 4px 0px 0px #000;
  padding: 18px 40px;
  @media screen and (max-width: 800px) {
  padding: 18px ;
  }
`
const AlertaErro = styled.p`
     color: #842029;
    background-color: #f8d7da;
    padding: 16px;
    border: 1px solid #f5c2c7;
    border-radius: 8px;
`

const Formulario = () => {
  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const adicionarParticipante = useAdicionarParticipante()

  const mensagemDeErro = useMensagemDeErro()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    adicionarParticipante(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
 
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          ref={inputRef}
          type="text"
          placeholder='Insira os nomes dos participantes'
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
        />
        <ButtonStyled disabled={!nome}>Adicionar</ButtonStyled>
        {mensagemDeErro && <AlertaErro role="alert">{mensagemDeErro}</AlertaErro>}
      </FormStyled>
  )
}

export default Formulario