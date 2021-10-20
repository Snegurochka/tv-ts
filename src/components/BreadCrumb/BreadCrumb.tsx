import { Wrapper, Content } from "./BreadCrumb.styles";

import { Link } from 'react-router-dom';
import { AppRoute } from "../../const";

type PropsType = {
    movieTitle: string
}

const BreadCrumb: React.FC<PropsType> = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to={AppRoute.HOME}>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)

export default BreadCrumb;