import { render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./ListaParticipantes"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

// colocar dentro de parenteses o que vai ser chamado
jest.mock('../state/hooks/useListaDeParticipantes', () => {
return{
  //jest.fn() -> deve simular uma funcao
  useListaDeParticipantes: jest.fn()
}
})

describe('uma lista vazia de participantes', () => {
  beforeEach(()=>{
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })
  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(0)
  })
})

describe('uma lista preenchida de participantes', () => {

  const participantes = ['Ana', 'Maria', 'Carlos']
  beforeEach(()=>{
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  })
  test('deve ser renderizada com todos elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(participantes.length)
  })
})