export enum ButtonType {
  SUBMIT = 'submit',
  BUTTON = 'button',
}

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum InputTypes {
  MONEY = 'money',
}

export type FormErrors<T> = Record<keyof T, string>;
export type Validator = { fn: (value: unknown) => boolean; message: string };
export type FormSchema = {
  type: InputTypes;
  name: string;
  required?: boolean;
  disabled?: boolean;
  validators?: Validator[];
  hint?: string;
}[];
