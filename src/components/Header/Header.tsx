import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './Header.styles';
import logo from '../../img/logo_kino_list.png';
import UserBlock from '../UserBlock/UserBlock';

const Header: React.FC = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <img src={logo} alt="logo" width="160" />
            </Link>

            <UserBlock />
        </Content>
    </Wrapper>
)

export default Header;