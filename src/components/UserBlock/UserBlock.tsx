import React from "react";
import { Wrapper, Avatar, LogoutLink } from "./UserBlock.styles";
import AvatarImg from '../../img/avatar.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";
import API from "../../API";
import { setLogin } from "../../store/AC/auth";

type PropsType = {}

const UserBlock: React.FC<PropsType> = () => {
    const { auth } = useSelector((s: AppStateType) => s);
    const { sessionId, username, gravatar } = { ...auth };
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        const isLogout = await API.logout(sessionId);
        if (isLogout) {
            dispatch(setLogin({ sessionId: '', username: '' }));
        }
    }

    return (
        <Wrapper>
            {username
                ? (
                    <>
                        {gravatar
                            && <Avatar src={`https://secure.gravatar.com/avatar/${gravatar}.jpg?s=150`} alt="User avatar" width="50" height="50" />
                        }
                        <span>
                            Hi, {username}
                            <LogoutLink onClick={logoutHandler}>Logout</LogoutLink>
                        </span>
                    </>
                )
                : (<Link to='/login' >
                    <Avatar src={AvatarImg} alt="User avatar" width="50" height="50" />
                    <span>Sign In</span>
                </Link>)}

        </Wrapper>
    )
}

export default UserBlock;