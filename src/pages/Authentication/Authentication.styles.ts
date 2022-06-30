import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 140px auto;
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 48px;
    max-width: var(--maxWidth);

    h2 {
        margin: 10px 0;
      }
      p {
        color: gray;
      }

    @media screen and (max-width: 680px) {
        max-width: 20rem;
    }
`;