export type TNavbarButton = {
  id: number;
  isDisabled?: boolean;
  text: string;
  url: string;
  withCredentials?: boolean;
  renderingFunction?: () => JSX.Element;
};

export type TNavbarButtonProps = {
  button: TNavbarButton;
  isSelected: boolean;
  isShadowed?: boolean;
  onClick: (button: TNavbarButton) => void;
};
