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
            <Avatar>
                <img src={AvatarImg} alt="User avatar" width="63" height="63" />
                <span>Sign In</span>
            </Avatar>
            </Link>
        </Wrapper>
    )
}

export default UserBlock;