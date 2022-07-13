type navbarButton = {
  id: number;
  text: string;
  onClick: () => void;
}

export interface NavbarProps {
  navbarButtons: navbarButton[];
  platform: 'copa' | 'nfl';
  logo: string;
}
