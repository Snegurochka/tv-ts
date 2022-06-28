import React from 'react';
// Styles
import { BaseButton, ButtonSpinner, InvertedButton } from './Button.styles';
// Types
type Props = {
  text: string;
  buttonType?: string;
  callback: () => void;
  isLoading?: boolean;
}

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]
)

const Button: React.FC<Props> = ({ text, callback, buttonType = BUTTON_TYPE_CLASSES.base, isLoading = false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton type='button' disabled={isLoading} onClick={callback} {...otherProps}>
    {isLoading ? <ButtonSpinner /> : text}
  </CustomButton>
};

export default Button;