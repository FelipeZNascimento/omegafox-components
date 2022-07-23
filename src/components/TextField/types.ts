export interface ITextFieldProps {
  defaultValue?: string;
  description?: string;
  inputName: string;
  isError?: boolean;
  placeholder: string;
  type?: 'password' | 'email' | 'text';
  onBlur?: null | ((e: React.FocusEvent<HTMLInputElement>) => void);
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
