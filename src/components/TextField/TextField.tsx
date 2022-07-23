import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { ITextFieldProps } from './types';
import styles from './TextField.module.scss';

export const TextField = ({
  defaultValue = '',
  description = '',
  inputName,
  isError = false,
  placeholder,
  type = 'text',
  onBlur,
  onChange
}: ITextFieldProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const legendClass = classNames({
    [styles.hidden]: value !== ''
  });

  const filledClass = classNames({
    [styles.filled]: value !== ''
  });

  const fieldsetClass = classNames({
    [styles.error]: isError
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <div className={styles.container}>
      <label className={filledClass} htmlFor={inputName}>
        {placeholder}
      </label>
      <div className={styles.inputContainer}>
        <input
          defaultValue={defaultValue}
          id={inputName}
          name={inputName}
          type={type}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>{placeholder}</legend>
        </fieldset>
      </div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
};
