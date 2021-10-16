import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;