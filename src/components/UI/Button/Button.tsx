import React from 'react';
// Styles
import { BaseButton, InvertedButton, GoogleSignInButton } from './Button.styles';
// Types
type Props = {
  text: string;
  buttonType?:string;
  callback: () => void;
}

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]
)

const Button: React.FC<Props> = ({ text, callback, buttonType = BUTTON_TYPE_CLASSES.base }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton type='button' onClick={callback}>{text}</CustomButton>
};

export default Button;