import styled from "styled-components"
import { ItemNav } from "./ItemNav"

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`

export const AsideNav = () => {
  return (
    <aside>
      <nav>
        <ListStyled>
          <ItemNav
            iconActive="/icones/home-ativo.png"
            iconInactive="/icones/home-inativo.png"
            isActive = {true}>
            Home
          </ItemNav>
          <ItemNav
            iconActive="/icones/mais-vistas-ativo.png"
            iconInactive="/icones/mais-vistas-inativo.png">
            Most viewed
          </ItemNav>
          <ItemNav
            iconActive="/icones/mais-curtidas-ativo.png"
            iconInactive="/icones/mais-curtidas-inativo.png">
            Most Liked
          </ItemNav>
          <ItemNav
            iconActive="/icones/novas-ativo.png"
            iconInactive="/icones/novas-inativo.png">
            News
          </ItemNav>
          <ItemNav
            iconActive="/icones/surpreenda-me-ativo.png"
            iconInactive="/icones/surpreenda-me-inativo.png">
            Surprise me
          </ItemNav>
        </ListStyled>
      </nav>
    </aside>
  )
}
