import React from "react";
import { Wrapper, Content, Text } from "../BigBanner/BigBanner.styles";

type PropsType = {
    image: string,
    title: string,
    text: string,
}

const BigBanner:React.FC<PropsType> = ({image, title, text}) => {
    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                </Text>
            </Content>
        </Wrapper>
    );
}
export default BigBanner;