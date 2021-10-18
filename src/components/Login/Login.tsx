import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin, setGravatar } from "./../../store/AC/auth";
import API from "../../API";
import { useHistory } from "react-router";

import { Wrapper } from "./Login.styles";

// Components
import Button from "../Button/Button";
import { AppRoute } from "../../const";


type PropsType = {}

const Login: React.FC<PropsType> = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async () => {
        setError(false);

        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            );
            dispatch(setLogin({ sessionId: sessionId.session_id, username }));
            const userInfo = await API.fetchUserInfo(sessionId.session_id);
            dispatch(setGravatar(userInfo.avatar.gravatar.hash));
            history.push(AppRoute.HOME);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <Wrapper>
            <h2>Log in to your account</h2>
            {error && <div className='error'>There was an error!</div>}
            <form action="#" method="post">
                <label><span>Email address</span>
                    <input
                        type='text'
                        value={username}
                        name='username'
                        placeholder="example@example.com"
                        onChange={(evt) => { setUsername(evt.currentTarget.value) }}
                    />
                </label>
                <label><span>Password</span>
                    <input
                        type='password'
                        value={password}
                        name='password'
                        onChange={(evt) => { setPassword(evt.currentTarget.value) }}
                    />
                </label>
                <Button text='Login' callback={handleSubmit} />
            </form>
        </Wrapper>
    )
}

export default Login;