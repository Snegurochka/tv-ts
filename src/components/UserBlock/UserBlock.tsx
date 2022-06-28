import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { Wrapper, Avatar, LogoutLink, AvatarLink } from "./UserBlock.styles";

import { AppRoute } from "../../const";
import AvatarImg from '../../img/avatar.png';
import { SignOutStart } from "../../store/user/user.action";


type PropsType = {}

const UserBlock: React.FC<PropsType> = () => {
    const user = useSelector(selectCurrentUser);
    
    //const { sessionId, username, gravatar } = { ...auth };
    const dispatch = useDispatch();

    // const logoutThemoviedbHandler = async () => {
    //     const isLogout = await API.logout(sessionId);
    //     if (isLogout) {
    //         dispatch(setLogin({ sessionId: '', email: '' }));
    //     }
    // }

    const logoutHandler = async () => {
        dispatch(SignOutStart());
    }

    return (
        <Wrapper>
            {user
                ? (
                    <>
                        {/* {gravatar
                            && <Avatar src={`https://secure.gravatar.com/avatar/${gravatar}.jpg?s=150`} alt="User avatar" width="50" height="50" />
                        } */}
                        <span>
                            Hi, Test
                            <LogoutLink onClick={logoutHandler}>Logout</LogoutLink>
                        </span>
                    </>
                )
                : (<AvatarLink to={AppRoute.LOGIN} >
                    <Avatar src={AvatarImg} alt="User avatar" width="50" height="50" />
                    <span>Sign In</span>
                </AvatarLink>)
            }

        </Wrapper>
    )
}

export default UserBlock;