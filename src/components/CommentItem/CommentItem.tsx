import React from 'react';
import { CommentType } from '../../interfaces/types';
import { Wrapper, Title, Text } from "./CommentItem.styles";

interface IProps {
    comment: CommentType
}

const CommentItem: React.FC<IProps> = ({ comment }) => {
    const { title, text } = comment;
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Wrapper>
    )
}

export default CommentItem