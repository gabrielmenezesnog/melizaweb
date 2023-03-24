import React, { Component } from 'react';

import styles from './PageInicio.module.css';

interface Props {}

class PageInicio extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className={styles.background} />
        <section aria-label="Início">
          <p>Página de início</p>
        </section>
      </>
    );
  }
}

export default PageInicio;
