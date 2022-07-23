import React from 'react';
import { render } from '@testing-library/react';
import { TextField } from './TextField';
import { ITextFieldProps } from './types';

describe('<InputField />', () => {
  const renderComponent = ({ inputName, placeholder, type }: ITextFieldProps) =>
    render(
      <TextField
        inputName={inputName}
        placeholder={placeholder}
        type={type}
        onChange={jest.fn()}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      defaultValue: '',
      isError: false,
      inputName: 'inputName',
      placeholder: 'Placeholder',
      onChange: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
