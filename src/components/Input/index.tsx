import React from 'react';
import './index.sass';

function Input(props: {
  name: string;
  value: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
  onInput: Function;
}) {
  const {
    name,
    value,
    placeholder,
    className,
    inputClassName,
    onInput,
  } = props;

  const handleInput = (e: any) => {
    const {
      target: {
        value: inputValue,
      },
    } = e;

    onInput(name, inputValue);
  };

  return (
    <div className={`input ${className}`}>
      <input
        className={`input-item ${inputClassName}`}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onInput={handleInput}
      />
    </div>
  );
}

export default Input;
