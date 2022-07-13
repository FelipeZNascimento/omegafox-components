export interface LoadingProps {
  image: string;
  overlay?: boolean;
  shadowed?: boolean;
  size?: 'small' | 'regular' | 'big';
  style?: 'spin' | 'headbutt';
  text?: string;
}
