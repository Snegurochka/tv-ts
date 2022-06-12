import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 140px auto;
    max-width: 28rem;

    form {
        display: grid;
        grid-template-columns: repeat(1,minmax(0,1fr));
        gap: 1.5rem;
    }

    @media screen and (max-width: 680px) {
        max-width: 20rem;
    }
`;