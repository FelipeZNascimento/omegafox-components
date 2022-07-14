import { TNavbarButton } from './types';

export const navbarButtons: TNavbarButton[] = [
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
  },
  {
    id: 6,
    text: '',
    url: '',
    renderingFunction: () => {
      return <a href="#">link</a>;
    }
  }
];
