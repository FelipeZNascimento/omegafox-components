import React from 'react';
import { render } from '@testing-library/react'
import Modal from './Modal'
import { IModalProps } from './types';

describe('<Modal />', () => {
    const renderComponent = ({ props }: IModalProps) =>
    render(<Modal props={props}/>);

  it('should render', () => {
    const text = 'Click';
    const { container } = renderComponent({ props: text });

    expect(container).toMatchSnapshot();
  });
})
