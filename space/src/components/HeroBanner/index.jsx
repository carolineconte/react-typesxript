import styled from "styled-components"

const BannerStyled = styled.div`
  background-image: url(src/assets/banner.png);
  height: 328px;
  border-radius: 20px;
  background-size: cover;
  max-width: 100%;
  flex: 1;
  h1{
    padding: 92px 64px;
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    width: 301px;
    margin: 0;
  }
`

export const HeroBanner = () => {
  return (
    <BannerStyled>
      <h1>A galeria mais completa de fotos do espaço!</h1>
    </BannerStyled>
  )
}
