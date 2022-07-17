import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from './Modal';
import { IModalProps } from './types';

describe('<Modal />', () => {
  const renderComponent = ({ children, isOpen, onClose }: IModalProps) =>
    render(
      <Modal isOpen={isOpen} onClose={onClose}>
        {children}
      </Modal>
    );

  it('should render', () => {
    const { container } = renderComponent({
      children: 'Content',
      isOpen: true,
      onClose: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
