import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content, Logo } from './Header.styles';
import logoIcon from '../../img/logo_kino_list.png';

// Components
import UserBlock from '../UserBlock/UserBlock';
import TopMenu from '../TopMenu/TopMenu';
import { AppRoute } from '../../const';

const Header: React.FC = () => (
    <Wrapper>
        <Content>
            <Link to={AppRoute.HOME}>
                <Logo src={logoIcon} alt="logo" width="160" />
            </Link>
            <TopMenu />

            <UserBlock />
        </Content>
    </Wrapper>
)

export default Header;