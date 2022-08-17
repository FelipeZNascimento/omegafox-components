import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { ITextFieldProps } from './types';
import styles from './TextField.module.scss';

export const TextField = ({
  defaultValue = '',
  description = '',
  inputName,
  isDisabled = false,
  isError = false,
  placeholder,
  type = 'text',
  onBlur = null,
  onChange,
  onEnter = null
}: ITextFieldProps) => {
  const [newValue, setNewValue] = useState('');

  useEffect(() => {
    setNewValue(defaultValue);
  }, [defaultValue]);

  const legendClass = classNames({
    [styles.hidden]: newValue !== ''
  });

  const filledClass = classNames({
    [styles.filled]: newValue !== ''
  });

  const fieldsetClass = classNames({
    [styles.error]: isError
  });

  const inputContainerClass = classNames(styles.inputContainer, {
    [styles.inputContainerDisabled]: isDisabled
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.target.value);
    onChange(e);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  };

  return (
    <div className={styles.container}>
      <label className={filledClass} htmlFor={inputName}>
        {placeholder}
      </label>
      <div className={inputContainerClass}>
        <input
          defaultValue={defaultValue}
          disabled={isDisabled}
          id={inputName}
          name={inputName}
          type={type}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
        />
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>{placeholder}</legend>
        </fieldset>
      </div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
};
