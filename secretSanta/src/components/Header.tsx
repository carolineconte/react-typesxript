import styled from "styled-components"

const HeaderStyled = styled.header`
 display: flex;
    justify-content: space-around;
    padding-top: 120px;
  div{
    background-image: url("/logo.png");
    width: 351px;
    height: 117px;
    @media screen and (max-width: 800px) {
      background-image: url("/logo-pequeno.png");
      width: 235px;
      height: 199px;
    }
  }
  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
  }
`
const ImageStyled = styled.img`
  z-index: 1;
`
const Header = () => {
  return (
    <>
    <HeaderStyled>
      <div className="imagem-logo" role="img" aria-label='Logo do Sorteador'></div>
      <ImageStyled src="/participante.png" />
    </HeaderStyled>

    </>
  )
}

export default Header