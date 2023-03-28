import React from 'react';

// estilos
import styles from './Saudacao.module.css';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/RootReducer';

interface Props {}

function Saudacao(props: Props) {
  
  // Redux
  const user = useSelector((state: RootState) => state.user);

  return <p>Saudações, {user.user?.name}</p>;
}

export default Saudacao;
