import styled from 'styled-components';

export const Wrapper = styled.div`
    a {
        cursor:pointer;
        display: flex;
        align-items: center;
        gap: 14px;
        text-decoration: none;

        color: var(--white);

        span {
            opacity: .6;
            transition: all 200ms;
        }

        span:hover {
            opacity: 1;
        }
    }
`;

export const Avatar = styled.img`
    border-radius:50%;
`