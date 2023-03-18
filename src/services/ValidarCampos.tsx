export interface FormValues {
  nome?: string;
  email?: string;
  senha?: string;
  repetirSenha?: string;
}

export interface FormErrors {
  nome?: string;
  email?: string;
  senha?: string;
  repetirSenha?: string;
  [key: string]: string | undefined;
}

export interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}

const validateForm = (values: FormValues): ValidationResult => {
  const errors: FormErrors = {
    nome: '',
    email: '',
    senha: '',
    repetirSenha: '',
  };
  let isValid = true;

  if (!values.nome?.trim()) {
    errors.nome = 'insira seu nome';
    isValid = false;
  } else if (
    !/^[a-zA-ZÀ-ÿ]+(([',. -][a-zA-ZÀ-ÿ ])?[a-zA-ZÀ-ÿ]*)*$/i.test(values.nome)
  ) {
    errors.nome = 'nome inválido';
    isValid = false;
  }

  if (!values.email?.trim()) {
    errors.email = 'insira um email';
    isValid = false;
  } else if (
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'email inválido';
    isValid = false;
  }

  if (!values.senha?.trim()) {
    errors.senha = 'insira uma senha';
    isValid = false;
  } else if (values.senha.length < 8) {
    errors.senha = 'a senha deve conter ao menos 8 caracteres';
    isValid = false;
  } else if (
    values.senha &&
    values.repetirSenha &&
    values.senha !== values.repetirSenha
  ) {
    errors.repetirSenha = 'as senhas não correspondem';
    isValid = false;
  }

  // console.log('senha: ', values.senha);
  // console.log('repetir senha: ', values.repetirSenha);

  if (!values.repetirSenha?.trim()) {
    errors.repetirSenha = 'confirme sua senha';
    isValid = false;
  } else if (
    values.senha &&
    values.repetirSenha &&
    values.senha !== values.repetirSenha
  ) {
    errors.repetirSenha = 'as senhas não correspondem';
    isValid = false;
  }

  return { isValid, errors };
};

export default validateForm;
