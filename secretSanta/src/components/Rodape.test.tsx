import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"


// colocar dentro de parenteses o que vai ser chamado
jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    //jest.fn() -> deve simular uma funcao
    useListaDeParticipantes: jest.fn()
  }
})

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
  return{
    // Para mockar qualque hook, a implementacao deve ser assim
    useNavigate: () => mockNavegacao
  }
})

const mockSorteio = jest.fn()
jest.mock('../state/hooks/useSorteador', () => {
  return{
    useSorteador: () => mockSorteio
  }
})

describe('onde nao existem participantes sufucientes', () => {

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })

  test('a brincadeira nao pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    const botao = screen.getByRole('button')
    expect(botao).toBeDisabled()
  })
})

describe('quando existem participantes suficientes', () => {

  const participantes = ['Ana', 'Maria', 'Carlos']

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  })

  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    const botao = screen.getByRole('button')
    expect(botao).not.toBeDisabled()
  })

  test('a brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    expect(mockNavegacao).toHaveBeenCalledTimes(1)
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    expect(mockSorteio).toHaveBeenCalledTimes(1)
  })
})