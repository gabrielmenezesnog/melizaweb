import React, { Component } from 'react';

import styles from './BotaoAuth.module.css';

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
};

class BotaoPrincipal extends Component<Props> {
  render() {
    const { onClick, label } = this.props;

    return (
      <>
        <button
          className={styles.containerBotao}
          type="submit"
          onClick={onClick}
        >
          <p className={styles.texto}>{label}</p>
        </button>
      </>
    );
  }
}

export default BotaoPrincipal;
