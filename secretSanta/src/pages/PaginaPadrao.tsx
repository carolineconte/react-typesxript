import { Outlet } from "react-router-dom"
import Card from "../components/Card"
import Header from "../components/Header"
import styled from "styled-components"

const ContainerStyled = styled.div`
  margin: 0;
`

export const PaginaPadrao = () => {
  return (
    <ContainerStyled>
      <Header></Header>
      <Card>
        <Outlet></Outlet>
      </Card>
    </ContainerStyled>
  )
}