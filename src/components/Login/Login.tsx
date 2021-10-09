import React, { useState } from "react";
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

        } catch (error) {
            setError(true);
        }
    }

    return (
        <Wrapper>
            {error && <div className='error'>There was an error!</div>}
            <label>Username:</label>
            <input
                type='text'
                value={username}
                name='username'
                onChange={(evt) => { setUsername(evt.currentTarget.value) }}
            />
            <input
                type='password'
                value={password}
                name='password'
                onChange={(evt) => { setPassword(evt.currentTarget.value) }}
            />
            <Button text='Login' callback={handleSubmit} />
        </Wrapper>
    )
}

export default Login;