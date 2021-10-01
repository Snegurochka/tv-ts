import { Wrapper, Image } from './Actor.styles';

type PropsType = {
    name:string, 
    character:string, 
    imageUrl:string
}

const Actor: React.FC<PropsType> = ({ name, character, imageUrl}) => (
    <Wrapper>
        <Image data-testid="thumbnail" src={imageUrl} alt='actor-thub' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
)

export default Actor;