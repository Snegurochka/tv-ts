import React from "react";
import { Wrapper, Avatar } from "./UserBlock.styles";
import AvatarImg from '../../img/avatar.png';
import { Link } from "react-router-dom";

type PropsType = {}

const UserBlock: React.FC<PropsType> = () => {
    const handleAvatarClick = () => {

    }
    return (
        <Wrapper>
            <Link to='/login' >
                <Avatar src={AvatarImg} alt="User avatar" width="50" height="50" />
                <span>Sign In</span>
            </Link>
        </Wrapper>
    )
}

export default UserBlock;