import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import styled from "styled-components"
import { useSorteador } from "../state/hooks/useSorteador"

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
  flex-direction: column;
    
   img {
     margin-top: 32px;
    }
}
`

const ButtonStyled = styled.button`
  width: 350px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background-color: #FE652B;
  color: #FFF;
  cursor: pointer;

  &:hover{
  background-color: #4B69FD;
  }
  &:disabled{
  opacity: 0.6;
  cursor: not-allowed;
  }
  @media screen and (max-width: 800px) {
    width: 220px;
    margin: 32px 0;
  }
`

const Rodape = () => {

  const navegarPara = useNavigate()
  const participantes = useListaDeParticipantes()
  const sortear = useSorteador()

  const iniciar = () => {
    sortear()
    navegarPara('/sorteio')
  }

  return (
    <FooterStyled>
      <ButtonStyled disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</ButtonStyled>
      <img src="sacolas.png" alt="Sacolas de compras" />
    </FooterStyled>
  )
}

export default Rodape