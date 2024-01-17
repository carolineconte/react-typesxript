import { fireEvent, render, screen } from "@testing-library/react";
//Components
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe('comportamento do formulario.tsx', () => {

  test('Quando o input esta vazio novos participantes nao podem ser adicionados', () => {
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)
    // Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botao
    const botao = screen.getByRole('button')

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //garatinr que o botao esteja desabilitado
    expect(botao).toBeDisabled()
  })

  test('adicionar um participante caso exista um nome preenchido', () => {
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)
    // Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botao
    const botao = screen.getByRole('button')

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })
    //clicar no botao de submeter
    fireEvent.click(botao)
    //garantir que o inputesteja com o foco ativo
    expect(input).toHaveFocus()
    //garantir que o input nao tenha um valor
    expect(input).toHaveValue('')
  })

  test('nomes duplicados nao podem ser adicionados na lista', () => {
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)
    // Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botao
    const botao = screen.getByRole('button')
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })
    //clicar no botao de submeter
    fireEvent.click(botao)
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })
    //clicar no botao de submeter
    fireEvent.click(botao)

    const mensagemDeErro = screen.getByRole('alert')
    expect(mensagemDeErro.textContent).toBe('Nomes duplicados nao sao permitidos!')
  })

  test('a mensagem de erro deve sumir apos os timers', () => {
    jest.useFakeTimers()
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)
    // Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botao
    const botao = screen.getByRole('button')
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })
    //clicar no botao de submeter
    fireEvent.click(botao)
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })
    //clicar no botao de submeter
    fireEvent.click(botao)

    let mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeInTheDocument()

    // evento que renderiza a pagina deve estar dentro de act
    act(() => {
      //esperar n segundos
      jest.runAllTimers()
    })

    mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeNull()
  })
})


