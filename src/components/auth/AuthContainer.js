import React from "react";

import { GoogleOAuthProvider } from '@react-oauth/google';

import Card from '@mui/material/Card';

import GoogleAuth from "./GoogleAuth";
import logoColoured from '../../assets/images/logoColoured.png';
import '../../styles/auth.scss';

const AuthContainer = () => {
    return (
        <>
            <div className="googleAuthContainer">
                <Card className="authCard">
                    <img src={logoColoured} alt="logo" width="150px" className="logo" />

                    <GoogleOAuthProvider clientId="1039207877766-8cptjj8eua65kmj3bk660p0k3j1e0fii.apps.googleusercontent.com">
                        <GoogleAuth />
                    </GoogleOAuthProvider>
                </Card>
            </div>
            <section className="section-bubble-top"></section>
            <section className="section-bubble-bottom"></section>
        </>
    );
}

export default AuthContainer;