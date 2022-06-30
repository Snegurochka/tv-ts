import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const signUpFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm: React.FC = () => {
    const [fields, setFields] = useState(signUpFields);
    const { displayName, email, password } = fields;

    const handleSubmit = () => {

    }

    const changeHandler = () => {

    }

    return (
        <section>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <Input label="Display name" name="displayName" value={displayName} onChange={changeHandler} />
                <Input label="Email address" name="email" value={email} onChange={changeHandler} />
                <Input label="Password" name="password" value={password} type='password' onChange={changeHandler} />

                <Button text='Sign Up' buttonType="small" callback={handleSubmit} isLoading={false} />
            </form>
        </section>
    )
}

export default SignUpForm