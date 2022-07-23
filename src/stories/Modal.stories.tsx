import React from 'react';
import { Story } from '@storybook/react';
import { Modal as Component, Button } from '../components/';
import { IModalProps } from '../components/types';

export default {
  props: '',
  component: Component
};

const Template: Story<IModalProps> = (args) => <Component {...args} />;

export const Modal = Template.bind({});

Modal.args = {
  children: (
    <>
      <p>Conteúdo passado inteiramente como children</p>
      <p>
        Conteúdo passado inteiramente como children Conteúdo passado
        inteiramente como childrenConteúdo passado inteiramente como
        childrenConteúdo passado inteiramente como childrenConteúdo passado
        inteiramente como children
      </p>
      <p>Conteúdo passado inteiramente como children</p>
      <Button onClick={() => null}>Button</Button>
    </>
  ),
  isOpen: true,
  title: 'Título do Modal',
  subtitle: 'Subtítulo do Modal',
  onClose: () => console.log('close')
};
