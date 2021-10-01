import React from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo_kino_list.png';

import { Wrapper, Content } from "./Header.styles";

const Header: React.FC = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
            <img src={logo} alt="logo" />
            </Link>
        </Content>
    </Wrapper>
)

export default Header;