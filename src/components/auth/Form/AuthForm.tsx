import React, { Component } from 'react';
import InputTexto from '../Inputs/InputTexto';
import InputSenha from '../Inputs/InputSenha';
import BotaoPrincipal from '../../botoes/BotaoAuth/BotaoAuth';

import styles from './AuthForm.module.css';
import validateForm from '../../../services/ValidarCampos';

interface Props {}

interface State {
  nome: string;
  email: string;
  senha: string;
  repetirSenha: string;
  error: boolean;
  formLogin: boolean;
  mensagensErros: {
    nome?: string | null;
    email?: string | null;
    senha?: string | null;
    repetirSenha?: string | null;
  };
}

class AuthForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      repetirSenha: '',
      error: true,
      formLogin: true,
      mensagensErros: {
        nome: null,
        email: null,
        senha: null,
        repetirSenha: null,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCadastro = this.handleCadastro.bind(this);
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
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
    const { id, value } = event.target;

    if (id === 'nome') {
      const errors = validateForm({ nome: value });
      if (errors.errors.nome) {
        this.setState({
          mensagensErros: {
            ...this.state.mensagensErros,
            nome: errors.errors.nome,
          },
          error: true,
        });
      } else {
        this.setState({
          mensagensErros: { ...this.state.mensagensErros, nome: null },
          error: false,
        });
      }
    }

    if (id === 'email') {
      const errors = validateForm({ email: value });
      if (errors.errors.email) {
        this.setState({
          mensagensErros: {
            ...this.state.mensagensErros,
            email: errors.errors.email,
          },
          error: true,
        });
      } else {
        this.setState({
          mensagensErros: { ...this.state.mensagensErros, email: null },
          error: false,
        });
      }
    }

    if (id === 'senha') {
      const errors = validateForm({
        senha: value,
        repetirSenha: this.state.repetirSenha,
      });

      if (Object.keys(errors).length === 0) {
        this.setState({ error: false });
      } else {
        this.setState({
          mensagensErros: {
            senha: errors.errors.senha,
            repetirSenha: this.state.repetirSenha
              ? errors.errors.repetirSenha
              : null,
          },
        });
        this.setState({ error: true });
      }
    }

    if (id === 'repetirSenha') {
      const { senha, repetirSenha } = this.state;
      const values = { senha, repetirSenha };

      const errors = validateForm(values);

      if (Object.keys(errors).length === 0) {
        this.setState({ error: false });
      } else {
        this.setState({
          mensagensErros: {
            senha: errors.errors.senha,
            repetirSenha: errors.errors.repetirSenha,
          },
        });
        this.setState({ error: true });
      }
    }
  };

  handleLogin() {
    const { email, senha } = this.state;
    const values = { email, senha };

    const errors = validateForm(values);

    if (
      errors.errors.email?.length === 0 &&
      errors.errors.senha?.length === 0
    ) {
      this.setState({ error: false }, () => {
        console.log(this.state.error);
        console.log('enviar form');
      });
    } else {
      this.setState({
        mensagensErros: {
          email: errors.errors.email,
          senha: errors.errors.senha,
        },
      });
      this.setState({ error: true });
    }
  }

  handleCadastro() {
    const { nome, email, senha, repetirSenha } = this.state;
    const values = { nome, email, senha, repetirSenha };

    const errors = validateForm(values);

    if (
      errors.errors.nome?.length === 0 &&
      errors.errors.email?.length === 0 &&
      errors.errors.senha?.length === 0 &&
      errors.errors.repetirSenha?.length === 0
    ) {
      this.setState({ error: false }, () => {
        console.log(this.state.error);
        console.log('enviar form');
      });
    } else {
      this.setState({
        mensagensErros: {
          nome: errors.errors.nome,
          email: errors.errors.email,
          senha: errors.errors.senha,
          repetirSenha: errors.errors.repetirSenha,
        },
      });
      this.setState({ error: true });
    }
  }

  toggleForm() {
    this.setState((prevState) => ({
      formLogin: !prevState.formLogin,
    }));

    // reinicia todos os erros ao trocar de formulário
    this.setState({
      mensagensErros: {
        nome: '',
        email: '',
        senha: '',
        repetirSenha: '',
      },
    });

    // reinicia todos os campos ao trocar de formulário
    this.setState({ nome: '', email: '', senha: '', repetirSenha: '' });
  }

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
                  <p className={styles.mensagemErro}>
                    {this.state.mensagensErros.email !== null
                      ? this.state.mensagensErros.email
                      : null}
                  </p>
                </div>

                <div>
                  <InputSenha
                    id="senha"
                    label="senha"
                    value={this.state.senha}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                  <p className={styles.mensagemErro}>
                    {this.state.mensagensErros.senha !== null
                      ? this.state.mensagensErros.senha
                      : null}
                  </p>
                </div>

                <div>
                  <BotaoPrincipal
                    label="continuar"
                    onClick={this.handleLogin}
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
                  <p className={styles.mensagemErro}>
                    {this.state.mensagensErros.nome !== null
                      ? this.state.mensagensErros.nome
                      : null}
                  </p>
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
                  <p className={styles.mensagemErro}>
                    {this.state.mensagensErros.email !== null
                      ? this.state.mensagensErros.email
                      : null}
                  </p>
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
                  <p className={styles.mensagemErro}>
                    {this.state.mensagensErros.senha !== null
                      ? this.state.mensagensErros.senha
                      : null}
                  </p>
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
                  <p className={styles.mensagemErro}>
                    {this.state.mensagensErros.repetirSenha !== null
                      ? this.state.mensagensErros.repetirSenha
                      : null}
                  </p>
                </div>

                <div>
                  <BotaoPrincipal
                    label="continuar"
                    onClick={this.handleCadastro}
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
