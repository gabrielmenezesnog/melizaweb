import React, { Component} from 'react';

import styles from './Page404.module.css';

interface Props {}

class Page404 extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = 'Página não encontrada';
  }

  render() {
    return (
      <>
        <div className={styles.background} />
        <section aria-label="Página não encontrada">
          <p>Página não encontrada</p>
        </section>
      </>
    );
  }
}

export default Page404;
