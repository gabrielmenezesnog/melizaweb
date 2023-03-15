import React, { Component, InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class InputTexto extends Component<Props> {
  render() {
    const { id, label, value, onBlur, onChange, ...inputProps } = this.props;

    return (
      <>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <input
          className={styles.input}
          type="email"
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...inputProps}
        />
      </>
    );
  }
}

export default InputTexto;
