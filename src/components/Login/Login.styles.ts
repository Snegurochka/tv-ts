import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 48px auto;
    max-width: 28rem;

    form {
        display: grid;
        grid-template-columns: repeat(1,minmax(0,1fr));
        gap: 1.5rem;
    }

    input {
        width: 100%;
        height: 2.75rem;
        padding: .75rem 1rem;
        margin-top: .25rem;
        border-radius: 1rem;
        border: 1px solid var(--medGrey);
    }
`;