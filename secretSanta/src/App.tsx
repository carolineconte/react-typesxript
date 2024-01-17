import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { PaginaPadrao } from './pages/PaginaPadrao';
import Configuracoes from './pages/Configuracoes';
import { Sorteio } from './pages/Sorteio';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route path='/' element={<Configuracoes />} />
            <Route path='/sorteio' element={<Sorteio />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>

  );
}

export default App;
