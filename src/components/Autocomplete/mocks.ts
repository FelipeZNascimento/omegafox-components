import { teamLeft, teamRight } from 'components/mocks';
import { TDropdownItem } from './types';

export const dropdownList: TDropdownItem[] = [
  {
    id: 0,
    name: 'Lionel Messi',
    details: { ...teamRight, nameShort: 'ARG' }
  },
  {
    id: 1,
    name: 'Cristiano Ronaldo',
    details: { ...teamLeft, nameShort: 'POR' }
  },
  {
    id: 2,
    name: 'Mbappé',
    details: { ...teamRight, nameShort: 'FRA' }
  },
  {
    id: 3,
    name: 'Caio Jr.',
    details: { ...teamLeft, nameShort: 'BRA' }
  },
  {
    id: 4,
    name: 'Darwin Nuñez',
    details: { ...teamRight, nameShort: 'URU' }
  }
];
