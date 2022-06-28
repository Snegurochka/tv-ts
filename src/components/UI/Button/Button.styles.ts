import styled from 'styled-components';
import { Spinner } from '../../Spinner/Spinner.styles';

export const BaseButton = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 20px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background: var(--white);
  color: var(--darkGrey);
`;

export const ButtonSpinner = styled(Spinner)`
  width: 30px;
  height: 30px;
`;