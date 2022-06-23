import React from 'react'
import { CommentType } from '../../types'

interface IProps {
    comment: CommentType
}

const CommentItem: React.FC<IProps> = ({ comment }) => {
    return (
        <div>CommentItem</div>
    )
}

export default CommentItem