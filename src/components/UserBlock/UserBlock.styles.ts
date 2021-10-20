import styled from 'styled-components';

export const Wrapper = styled.div`
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 14px;

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

    @media screen and (max-width: 680px) {
        max-width: 25px;
        max-height: 25px;
      }
`;

export const LogoutLink = styled.span`
    display: block;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;