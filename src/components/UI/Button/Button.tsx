import { FC, ButtonHTMLAttributes } from 'react';
// Styles
import { BaseButton, ButtonSpinner, InvertedButton, SmallButton } from './Button.styles';
// Types
type Props = {
  text: string;
  buttonType?: BUTTON_TYPE_CLASSES;
  callback: () => void;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  inverted = 'inverted',
  small = 'small',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.small]: SmallButton,
  }[buttonType]
)

const Button: FC<Props> = ({ text, callback, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton type='button' disabled={isLoading} onClick={callback} {...otherProps}>
    {isLoading ? <ButtonSpinner /> : text}
  </CustomButton>
};

export default Button;