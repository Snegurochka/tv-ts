import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    gap: 24px;

    a {
        display: flex;
        gap: 8px;
        align-items: center;
        color: var(--white);
        text-decoration: none;
        opacity: .6;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        span{
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: var(--white);
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
    }

    a:hover {
        opacity: 1;

        span:after {
            transform: scaleX(1);
        }
    }

    @media screen and (max-width: 680px) {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 5rem;
        width: 100%;
        background: var(--darkGrey);
        justify-content: center;
    }
`