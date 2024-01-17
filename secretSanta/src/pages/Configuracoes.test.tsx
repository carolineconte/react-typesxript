import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Configuracoes from "./Configuracoes"

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
  return{
    // Para mockar qualque hook, a implementacao deve ser assim
    useNavigate: () => mockNavegacao
  }
  
})

describe('a pagina padrao', () => {
  test('deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracoes/>
      </RecoilRoot>
    )
    expect(container).toMatchSnapshot()
  })
})