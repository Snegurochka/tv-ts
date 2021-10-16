import React, { useState } from "react";
import API from "../../API";
import Button from "../Button/Button";
import { Wrapper } from "./Login.styles";


type PropsType = {}

const Login: React.FC<PropsType> = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        setError(false);

        try {
            const requestToken = await API.getRequestToken();
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