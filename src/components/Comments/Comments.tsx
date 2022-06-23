import React from "react";
import { useSelector } from "react-redux";
import { selectComments, selectCommentsIsLoading } from "../../store/comments/comments.selector";
import CommentItem from "../CommentItem/CommentItem";
import { Spinner } from "../Spinner/Spinner.styles";
import { Wrapper } from "./Comments.styles";

const Comments: React.FC = () => {
    const comments = useSelector(selectComments);
    const isLoading = useSelector(selectCommentsIsLoading);

    return (
        <Wrapper>
            <h2>Comments</h2>
            {isLoading ? <Spinner /> : ''}
            {comments ? (
                comments.map((comment) => <CommentItem comment={comment} />)
            ) :
                (<p>there is no comments yet</p>)
            }
        </Wrapper>
    )
}

export default Comments
