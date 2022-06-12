import React from "react";
import SignInForm from "../SignInForm/SignInForm";
import { Wrapper } from "./Authentication.styles";

const Authentication: React.FC = () => {
    return (
        <Wrapper>
            <SignInForm />
        </Wrapper>
    )
}

export default Authentication;