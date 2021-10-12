import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './Header.styles';
import logo from '../../img/logo_kino_list.png';

// Components
import UserBlock from '../UserBlock/UserBlock';
import TopMenu from '../TopMenu/TopMenu';

const Header: React.FC = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <img src={logo} alt="logo" width="160" />
            </Link>
            <TopMenu />

            <UserBlock />
        </Content>
    </Wrapper>
)

export default Header;