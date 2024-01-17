import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante nao sorteio o proprio nome', () => {

    const participantes = ['Ana', 'Maria', 'Carlos']

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})