import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
display: flex;
justify-content: space-around;
gap: 20px;
max-height: 385px;
overflow: hidden;
`;

export const Content_Greed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(196px, 1fr));
  grid-gap: 14px;

  .active {
    opacity: 0.8;
  }
`;


export const BigImg = styled.img`  
max-width: 45%;
max-height: 400px;
border-radius: 20px;
object-fit: cover;`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
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