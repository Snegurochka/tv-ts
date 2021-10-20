import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 12px 0;
  margin: 0 auto;

  @media screen and (max-width: 680px) {
    padding: 4px 0;
  }
`;

export const Logo = styled.img`
  @media screen and (max-width: 680px) {
    max-width: 90px;
  }
`;
