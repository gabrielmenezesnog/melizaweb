import React, { Component } from 'react';
import AuthForm from '../../components/auth/Form/AuthForm';
import MelizaLogo from '../../components/svg/MelizaLogo';

import styles from './TelaDeAutenticacao.module.css';

interface Props {}

class TelaDeAutenticacao extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section aria-label="Entre ou crie uma conta!" className={styles.grid}>
          <div className={styles.containerLogo}>
            <MelizaLogo />
            <h1 className={styles.logo}>meliza</h1>
          </div>
          <AuthForm />
        </section>
      </>
    );
  }
}

export default TelaDeAutenticacao;
