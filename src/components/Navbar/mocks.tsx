import { TNavbarButton } from '../types';
import { Button } from '../index';

export const navbarButtonsLeft: TNavbarButton[] = [
  {
    id: 0,
    text: 'Início',
    url: ''
  },
  {
    id: 1,
    text: 'Resultados',
    url: ''
  },
  {
    id: 2,
    text: 'Apostar',
    url: ''
  },
  {
    id: 3,
    text: 'Regras',
    url: ''
  },
  {
    id: 4,
    text: 'Prêmios',
    url: ''
  },
  {
    id: 5,
    text: 'Extras',
    url: ''
  }
];

export const navbarRenderButton = () => {
  return (
    <Button
      isShadowed={false}
      variant="primary"
      onClick={() => console.log('Button click')}
    >
      Entrar
    </Button>
  );
};

export const navbarButtonsRight: TNavbarButton[] = [
  {
    id: 0,
    text: '',
    url: '',
    renderingFunction: navbarRenderButton
  }
];
