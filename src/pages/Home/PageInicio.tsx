import React, { Component } from 'react';

import styles from './PageInicio.module.css';
import Saudacao from '../../components/Inicio/saudacao/Saudacao';

interface Props {}

class PageInicio extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = 'Meliza - início';
  }

  render() {
    return (
      <div className={styles.background}>
        <section aria-label="Início">
          <Saudacao />
        </section>
      </div>
    );
  }
}

export default PageInicio;
