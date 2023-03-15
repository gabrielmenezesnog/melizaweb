import React, { Component } from 'react';
import InputTexto from '../Inputs/InputTexto';
import InputSenha from '../Inputs/InputSenha';
import BotaoPrincipal from '../../botoes/BotaoAuth/BotaoAuth';

import styles from './AuthForm.module.css';

interface Props {}

interface State {
  email: string;
  senha: string;
  error: boolean;
}

class AuthForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // lógica para enviar os dados do formulário
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === 'email') {
      this.setState({ email: value });
    } else if (id === 'senha') {
      this.setState({ senha: value });
    }
  };

  handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('saiu do input');
  };

  render() {
    return (
      <>
        <div className={styles.containerForm}>
          <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Entrar</h1>
            <p className={styles.subtitulo}>
              novo usuário?{' '}
              <button
                className={styles.botaoToggleForm}
                onClick={() => console.log('clicou para mudar o form')}
              >
                Crie uma conta
              </button>
            </p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <InputTexto
                id="email"
                label="email"
                value={this.state.email}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <InputSenha
                id="senha"
                label="senha"
                value={this.state.senha}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <BotaoPrincipal
                label="continuar"
                onClick={() => console.log('clicou')}
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AuthForm;
