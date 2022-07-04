import { ChangeEvent, FC, FormEvent, useState } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const signUpFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm: FC = () => {
    const [fields, setFields] = useState(signUpFields);
    const { displayName, email, password } = fields;

    const handleSubmit = async () => {

    }

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFields({ ...fields, [name]: value });
    };

    return (
        <section>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <Input label="Display name" name="displayName" value={displayName} onChange={changeHandler} />
                <Input label="Email address" name="email" value={email} onChange={changeHandler} />
                <Input label="Password" name="password" value={password} type='password' onChange={changeHandler} />

                <Button text='Sign Up' buttonType={BUTTON_TYPE_CLASSES.small} callback={handleSubmit} isLoading={false} />
            </form>
        </section>
    )
}

export default SignUpForm