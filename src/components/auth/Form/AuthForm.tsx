import React, { useState } from 'react';

// react router
// documentação useNavigate - https://reactrouter.com/en/main/hooks/use-navigate
// documentação redirect - https://reactrouter.com/en/main/fetch/redirect
// import { redirect } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// componentes
import InputTexto from '../Inputs/InputTexto';
import InputSenha from '../Inputs/InputSenha';
import BotaoPrincipal from '../../botoes/BotaoAuth/BotaoAuth';
import validateForm from '../../../services/ValidarCampos';

// estilos
import styles from './AuthForm.module.css';

interface Props {}

function AuthForm(props: Props) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [error, setError] = useState(true);
  const [formLogin, setFormLogin] = useState(true);
  const [mensagensErros, setMensagensErros] = useState({
    nome: '',
    email: '',
    senha: '',
    repetirSenha: '',
  });

  // const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === 'nome') {
      setNome(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'senha') {
      setSenha(value);
    }

    if (id === 'repetirSenha') {
      setRepetirSenha(value);
    }
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    if (id === 'nome') {
      const errors = validateForm({ nome: value });
      if (errors.errors.nome) {
        setMensagensErros({
          ...mensagensErros,
          nome: errors.errors.nome,
        });
        setError(true);
      } else {
        setMensagensErros({
          ...mensagensErros,
          nome: '',
        });
        setError(false);
      }
    }

    if (id === 'email') {
      const errors = validateForm({ email: value });
      if (errors.errors.email) {
        setMensagensErros({
          ...mensagensErros,
          email: errors.errors.email,
        });
        setError(true);
      } else {
        setMensagensErros({
          ...mensagensErros,
          email: '',
        });
        setError(false);
      }
    }

    if (id === 'senha') {
      // ao verificar a senha, deve verificar também a confirmação da senha
      const errors = validateForm({
        senha: value,
        repetirSenha: repetirSenha,
      });

      if (Object.keys(errors).length === 0) {
        setError(false);
      } else {
        if (repetirSenha.length !== 0) {
          setMensagensErros({
            ...mensagensErros,
            senha: errors.errors.senha ? errors.errors.senha : '',
            repetirSenha: errors.errors.repetirSenha
              ? errors.errors.repetirSenha
              : '',
          });
        } else {
          setMensagensErros({
            ...mensagensErros,
            senha: errors.errors.senha ? errors.errors.senha : '',
          });
        }
        setError(true);
      }
    }

    if (id === 'repetirSenha') {
      const values = { senha, repetirSenha };

      const errors = validateForm(values);

      if (Object.keys(errors).length === 0) {
        setError(false);
      } else {
        if (senha.length !== 0) {
          setMensagensErros({
            ...mensagensErros,
            senha: errors.errors.senha ? errors.errors.senha : '',
            repetirSenha: errors.errors.repetirSenha
              ? errors.errors.repetirSenha
              : '',
          });
        } else {
          setMensagensErros({
            ...mensagensErros,
            repetirSenha: errors.errors.repetirSenha
              ? errors.errors.repetirSenha
              : '',
          });
        }
        setError(true);
      }
    }
  };

  const handleLogin = () => {
    const values = { email, senha };

    const errors = validateForm(values);

    if (
      errors.errors.email?.length === 0 &&
      errors.errors.senha?.length === 0
    ) {
      setError(false);
      if (error === true) {
        // lógica para enviar o formulário
        console.log('enviar form');
      }
      // navigate('/inicio');
    } else {
      if (errors.errors.email && errors.errors.senha) {
        setMensagensErros({
          ...mensagensErros,
          email: errors.errors.email,
          senha: errors.errors.senha,
        });
      }
      setError(true);
    }
  };

  const handleCadastro = () => {
    const values = { nome, email, senha, repetirSenha };

    const errors = validateForm(values);

    if (
      errors.errors.nome?.length === 0 &&
      errors.errors.email?.length === 0 &&
      errors.errors.senha?.length === 0 &&
      errors.errors.repetirSenha?.length === 0
    ) {
      setError(false);
      if (error === true) {
        // lógica para enviar o formulário
        console.log('enviar form');
      }
    } else {
      if (
        errors.errors.email &&
        errors.errors.senha &&
        errors.errors.nome &&
        errors.errors.repetirSenha
      ) {
        setMensagensErros({
          nome: errors.errors.nome,
          email: errors.errors.email,
          senha: errors.errors.senha,
          repetirSenha: errors.errors.repetirSenha,
        });
      }
      setError(true);
    }
  };

  const toggleForm = () => {
    setFormLogin(!formLogin);

    // reinicia todos os erros ao trocar de formulário
    setMensagensErros({
      nome: '',
      email: '',
      senha: '',
      repetirSenha: '',
    });

    // reinicia todos os campos ao trocar de formulário
    setNome('');
    setEmail('');
    setSenha('');
    setRepetirSenha('');
  };

  return (
    <>
      {formLogin ? (
        <div className={formLogin ? styles.fadeIn : styles.fadeOut}>
          <div className={styles.containerForm}>
            <div className={styles.apresentacao}>
              <h1 className={styles.titulo}>Entrar</h1>
              <p className={styles.subtitulo}>
                novo usuário?{' '}
                <button className={styles.botaoToggleForm} onClick={toggleForm}>
                  Crie uma conta
                </button>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <InputTexto
                  id="email"
                  label="email"
                  value={email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {mensagensErros.email !== null ? (
                  <p className={styles.mensagemErro}>{mensagensErros.email}</p>
                ) : null}
              </div>

              <div>
                <InputSenha
                  id="senha"
                  label="senha"
                  value={senha}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {mensagensErros.senha !== null ? (
                  <p className={styles.mensagemErro}>{mensagensErros.senha}</p>
                ) : null}
              </div>

              <div>
                <BotaoPrincipal label="continuar" onClick={handleLogin} />
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
                <button className={styles.botaoToggleForm} onClick={toggleForm}>
                  Faça login
                </button>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <InputTexto
                  id="nome"
                  label="nome"
                  placeholder="nome e sobrenome"
                  value={nome}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {mensagensErros.nome !== null ? (
                  <p className={styles.mensagemErro}>{mensagensErros.nome}</p>
                ) : null}
              </div>
              <div>
                <InputTexto
                  id="email"
                  label="email"
                  placeholder="exemplo@email.com"
                  value={email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {mensagensErros.email !== null ? (
                  <p className={styles.mensagemErro}>{mensagensErros.email}</p>
                ) : null}
              </div>

              <div>
                <InputSenha
                  id="senha"
                  label="senha"
                  placeholder="mínimo de 8 caracteres"
                  value={senha}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {mensagensErros.senha !== null ? (
                  <p className={styles.mensagemErro}>{mensagensErros.senha}</p>
                ) : null}
              </div>

              <div>
                <InputSenha
                  id="repetirSenha"
                  label="repetir senha"
                  placeholder="repita a senha"
                  value={repetirSenha}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {mensagensErros.repetirSenha !== null ? (
                  <p className={styles.mensagemErro}>
                    {mensagensErros.repetirSenha}
                  </p>
                ) : null}
              </div>

              <div>
                <BotaoPrincipal label="continuar" onClick={handleCadastro} />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AuthForm;
