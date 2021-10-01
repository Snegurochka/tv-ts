import React from "react";

import { Wrapper, Content } from "./Grid.styles";

type PropsType = {
    header: string,
}

const Grid: React.FC<PropsType> = ({ header, children }) => {
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>{children}</Content>
        </Wrapper>
    )
}

export default Grid;