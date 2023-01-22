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
    <img
      width="100%"
      height="100%"
      src="https://cdn.pariscityvision.com/library/image/5449.jpg"
    />
    // <>
    //   <p>Conteúdo passado inteiramente como children</p>
    //   <p>
    //     Conteúdo passado inteiramente como children Conteúdo passado
    //     inteiramente como childrenConteúdo passado inteiramente como
    //     childrenConteúdo passado inteiramente como childrenConteúdo passado
    //     inteiramente como children
    //   </p>
    //   <p>Conteúdo passado inteiramente como children</p>
    //   <Button onClick={() => null}>Button</Button>
    // </>
  ),
  isOpen: true,
  isPaddedContent: false,
  isRounded: true,
  title: 'Título do Modal',
  subtitle: 'Subtítulo do Modal',
  onClickNext: () => console.log('next'),
  onClickPrevious: () => console.log('previous'),
  onClose: () => console.log('close')
};
