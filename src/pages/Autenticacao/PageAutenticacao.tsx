import React, { Component } from 'react';
import AuthForm from '../../components/auth/Form/AuthForm';
import MelizaLogo from '../../components/svg/MelizaLogo';

import styles from './PageAutenticacao.module.css';

interface Props {}

class PageAutenticacao extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = 'Meliza';
  }

  render() {
    return (
      <>
        <div className={styles.background} />
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

export default PageAutenticacao;
