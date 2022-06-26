import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../const';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';
import { isLoginError } from '../../store/user/user.selector';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import { Wrapper, ButtonsContainer } from './SignInForm.styles';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const error = useSelector(isLoginError);

    const dispatch = useDispatch();
    const history = useHistory();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    // const handleSubmitThemoviedb = async () => {
    //     try {
    //         const requestToken = await API.getRequestToken();
    //         const sessionId = await API.authenticate(
    //             requestToken,
    //             email,
    //             password
    //         );
    //         dispatch(setLogin({ sessionId: sessionId.session_id, email }));
    //         const userInfo = await API.fetchUserInfo(sessionId.session_id);
    //         dispatch(setGravatar(userInfo.avatar.gravatar.hash));
    //         resetFormFields();
    //         history.push(AppRoute.HOME);
    //     } catch (error) {
    //         //setError(true);
    //     }
    // }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const logGoogleUser = async () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async () => {
        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
            history.push(AppRoute.HOME);
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
                    <Button text='Login' callback={handleSubmit} />
                    <Button text='Sign in with Google Popup' callback={logGoogleUser} />
                </ButtonsContainer>

            </form>
        </Wrapper>
    )
}

export default SignInForm