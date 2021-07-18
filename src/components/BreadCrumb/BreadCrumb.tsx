import { Wrapper, Content } from "./BreadCrumb.styles";

import { Link } from 'react-router-dom';

type PropsType = {
    movieTitle: string
}

const BreadCrumb: React.FC<PropsType> = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)

export default BreadCrumb;