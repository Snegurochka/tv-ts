import React from "react";
import { Wrapper, Avatar } from "./UserBlock.styles";
import AvatarImg from '../../img/avatar.png';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";

type PropsType = {}

const UserBlock: React.FC<PropsType> = () => {
    const { auth } = useSelector((s: AppStateType) => s);
    const { username } = { ...auth };
    const handleAvatarClick = () => {

    }
    return (
        <Wrapper>
            {username
                ? username
                : (<Link to='/login' >
                    <Avatar src={AvatarImg} alt="User avatar" width="50" height="50" />
                    <span>Sign In</span>
                </Link>)}

        </Wrapper>
    )
}

export default UserBlock;