import React, { memo, useMemo } from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: Props) {

  //  Funciona igual o useEffect a (funcao q retona a variavel, array de dependencia)
  // se o array estiver vazio o icone nao muda em nenhum momento, para mudar adicionar a variais ligadas a mudanca
  const elemento = useMemo(() => <CgSearch size={20} color="#4C4D5E" />,[]);
  
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Buscar"
      />
      {elemento}
    </div>
  );
}

export default memo(Buscador);