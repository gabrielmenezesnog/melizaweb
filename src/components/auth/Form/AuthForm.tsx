import React, { Component } from 'react';
import InputTexto from '../Inputs/InputTexto';
import InputSenha from '../Inputs/InputSenha';
import BotaoPrincipal from '../../botoes/BotaoAuth/BotaoAuth';

import styles from './AuthForm.module.css';

interface Props {}

interface State {
  nome: string;
  email: string;
  senha: string;
  repetirSenha: string;
  error: boolean;
  formLogin: boolean;
}

class AuthForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      repetirSenha: '',
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
    if (id === 'nome') {
      this.setState({ nome: value });
    }
    if (id === 'email') {
      this.setState({ email: value });
    }
    if (id === 'senha') {
      this.setState({ senha: value });
    }

    if (id === 'repetirSenha') {
      this.setState({ repetirSenha: value });
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
              <form onSubmit={this.handleSubmit}>
                <div>
                  <InputTexto
                    id="nome"
                    label="nome"
                    placeholder="nome e sobrenome"
                    value={this.state.nome}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <InputTexto
                    id="email"
                    label="email"
                    placeholder="exemplo@email.com"
                    value={this.state.email}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <InputSenha
                    id="senha"
                    label="senha"
                    placeholder="mínimo de 8 caracteres"
                    value={this.state.senha}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <InputSenha
                    id="repetirSenha"
                    label="repetir senha"
                    placeholder="repita a senha"
                    value={this.state.repetirSenha}
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
          </div>
        )}
      </>
    );
  }
}

export default AuthForm;
