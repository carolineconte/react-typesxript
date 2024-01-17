import styled from "styled-components"
import ListaParticipantes from "../components/ListaParticipantes"
import Rodape from "../components/Rodape"
import Formulario from "../components/Formulario"

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`

const Configuracoes = () => {
  return (
    <ContainerStyled>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </ContainerStyled>
  )
}

export default Configuracoes