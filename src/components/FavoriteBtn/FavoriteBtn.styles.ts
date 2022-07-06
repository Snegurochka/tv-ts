import styled from 'styled-components';

export const FavoriteBtnWrapper = styled.div`
    position  : absolute;
    transition: all 0.3s ease;
    cursor    : pointer;
    top : 12px;
    right: 10px;

    :hover {
        color: red;
    }

    svg {
        width: 30px;
    }
`;
