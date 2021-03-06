import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { AppRoute } from '../../const';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';
import { isLoginError, isLoging } from '../../store/user/user.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import { Wrapper, ButtonsContainer, ButtonGoogle } from './SignInForm.styles';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const error = useSelector(isLoginError);
    const isLoading = useSelector(isLoging);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const logGoogleUser = async () => {
        dispatch(googleSignInStart(history));
    };

    const handleSubmit = async () => {
        try {
            dispatch(emailSignInStart(email, password, history));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Wrapper>
            <h2>Log in to your account</h2>
            {/* <p>You can use themoviedb.org login</p> */}
            {error && <div className='error'>There was an error!</div>}
            <form action="#" method="post">
                <Input
                    label='Email address'
                    name='email'
                    onChange={handleChange}
                    value={email} />
                <Input
                    label='Password'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    value={password} />
                <ButtonsContainer>
                    <Button text='Login' buttonType={BUTTON_TYPE_CLASSES.small} callback={handleSubmit} isLoading={isLoading} />

                </ButtonsContainer>

            </form>
            <ButtonGoogle text='Sign in with Google' buttonType={BUTTON_TYPE_CLASSES.small} callback={logGoogleUser} />
        </Wrapper>
    )
}

export default SignInForm