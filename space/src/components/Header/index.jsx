/* eslint-disable react/prop-types */
import styled from "styled-components"
import { SearchInput } from "./SearchInput"

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img{
    max-width: 212px;
  }
`
export const Header = ({setFilter}) => {
  return (
    <HeaderStyled>
      <img src="/imagens/logo.png" alt="" />
      <SearchInput setFilter={setFilter} />
    </HeaderStyled>
  )
}

