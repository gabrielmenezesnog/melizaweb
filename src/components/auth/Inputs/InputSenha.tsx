import React, { Component, InputHTMLAttributes } from 'react';

import styles from './Input.module.css';
import SenhaInvisivel from '../../svg/SenhaInvisivel';
import SenhaVisivel from '../../svg/SenhaVisivel';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface State {
  showPassword: boolean;
}

class InputSenha extends Component<Props, State> {
  state = {
    showPassword: false,
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { id, label, value, onBlur, onChange, ...inputProps } = this.props;

    const { showPassword } = this.state;

    const inputType = showPassword ? 'text' : 'password';
    const icon = showPassword ? <SenhaVisivel /> : <SenhaInvisivel />;

    return (
      <>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <div className={styles.containerSenha}>
          <input
            type={inputType}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            maxLength={60}
            {...inputProps}
          />
          <button
            type="button"
            className={styles.button}
            onClick={this.toggleShowPassword}
          >
            {icon}
          </button>
        </div>
      </>
    );
  }
}

export default InputSenha;
