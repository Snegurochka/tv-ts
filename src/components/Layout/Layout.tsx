import React from 'react';
import { Wrapper } from "./Layout.styles";

import Header from './Header/Header';
import { GlobalStyle } from '../../GlobalStyle';

interface PropsType {
    header?: string,
    classPage?: string,
    typeContent?: 'page'
}

const Layout: React.FC<PropsType> = ({ header, typeContent, children }) => {
    return (<>
        <Header />
        <Wrapper>
            {typeContent && header
                ? <h1>{header}</h1>
                : null}
            {children}
        </Wrapper>
        <GlobalStyle />
    </>
    )
}

export default Layout;