import styled from 'styled-components';
import Button from '../UI/Button/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  p {
    color: gray;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ButtonGoogle = styled(Button)`
  background: red;
  font-size: 16px;
  width: 100%;
`