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
  formLogin: boolean;
}

class AuthForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      error: false,
      formLogin: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState((prevState) => ({
      formLogin: !prevState.formLogin,
    }));
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
    const { formLogin } = this.state;
    return (
      <>
        {formLogin ? (
          <div className={formLogin ? styles.fadeIn : styles.fadeOut}>
            <div className={styles.containerForm}>
              <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Entrar</h1>
                <p className={styles.subtitulo}>
                  novo usuário?{' '}
                  <button
                    className={styles.botaoToggleForm}
                    onClick={this.toggleForm}
                  >
                    Crie uma conta
                  </button>
                </p>
              </div>
              {formLogin ? (
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
              ) : ''}
            </div>
          </div>
        ) : (
          <div className={formLogin ? styles.fadeIn : styles.fadeOut}>
            <div className={styles.containerForm}>
              <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Faça parte</h1>
                <p className={styles.subtitulo}>
                  possui uma conta?{' '}
                  <button
                    className={styles.botaoToggleForm}
                    onClick={this.toggleForm}
                  >
                    Faça login
                  </button>
                </p>
              </div>
              {formLogin ? (
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
              ) : ''}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default AuthForm;
