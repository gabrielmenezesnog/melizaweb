import React, { Component } from 'react';

interface InputProps {
  type: 'email' | 'password';
  errorMessage?: string;
}

interface InputState {
  value: string;
  error: string | null;
}

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  password: {
    regex: /^.{8,}$/,
    message: 'Senha inválida',
  },
};

class ValidarInput extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: '',
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    this.setState({
      value,
      error: null,
    });
  }

  handleBlur() {
    const { type, errorMessage } = this.props;
    const { value } = this.state;

    if (value.length === 0) {
      this.setState({
        error: 'Preencha um valor',
      });
    } else if (types[type] && !types[type].regex.test(value)) {
      this.setState({
        error: errorMessage || types[type].message,
      });
    }
  }

  render() {
    const { type } = this.props;
    const { value, error } = this.state;

    return (
      <>
        <input
          type={type}
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {error && <span>{error}</span>}
      </>
    );
  }
}

export default ValidarInput;
