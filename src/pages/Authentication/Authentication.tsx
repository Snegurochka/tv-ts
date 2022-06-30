import React from "react";
import Layout from "../../components/Layout/Layout";
import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Wrapper } from "./Authentication.styles";

const Authentication: React.FC = () => {
    return (
        <Layout>
            <Wrapper>
                <SignInForm />
                <SignUpForm />
            </Wrapper>
        </Layout>
    )
}

export default Authentication;