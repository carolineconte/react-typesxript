import { act, fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { Sorteio } from "./Sorteio"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"

jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    //jest.fn() -> deve simular uma funcao
    useListaDeParticipantes: jest.fn()
  }
})
jest.mock('../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn()
  }
})

describe('na pagina de sorteio', () => {
  const participantes = ['Ana', 'Maria', 'Carlos']
  const resultado = new Map([
    ['Ana', 'Maria'],
    ['Maria', 'Carlos'],
    ['Carlos', 'Ana']
  ])

  beforeEach(() => {
    //OBRIGATORIO COLOCAR PONTO E VIRGULA NO FINAL
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  })

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length + 1)
  })

  test('o amigo secreto e exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Selecione o seu nome')
    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')
    expect(amigoSecreto).toBeInTheDocument()
  })

  test('o nome do amigo deve sumir apos os timers', () => {
    jest.useFakeTimers()
    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    //seleciona o nome
    const select = screen.getByPlaceholderText('Selecione o seu nome')
    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })

    //encontrar o botao
    const botao = screen.getByRole('button')
    //clicar no botao de submeter encontra o amigo
    fireEvent.click(botao)

    let nomeAmigo = screen.queryByRole('alert')
    expect(nomeAmigo).toBeInTheDocument()

    // evento que renderiza a pagina deve estar dentro de act
    act(() => {
      //esperar n segundos
      jest.runAllTimers()
    })

    nomeAmigo = screen.queryByRole('alert')
    expect(nomeAmigo).not.toBeInTheDocument()
  })
})