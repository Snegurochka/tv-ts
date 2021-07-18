import React from "react";
import { Link } from "react-router-dom";

//import RMDBLogo from '../../img/react-movie-logo.svg';

import { Wrapper, Content } from "./Header.styles";

const Header: React.FC = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                Home
            </Link>
            Header
        </Content>
    </Wrapper>
)

export default Header;