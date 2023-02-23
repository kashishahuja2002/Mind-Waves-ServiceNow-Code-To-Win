import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import Card from '@mui/material/Card';

import logoColoured from '../../assets/images/logoColoured.png';
import '../../styles/auth.scss';

const GoogleAuth = () => {

    return (
        <Card className="authCard">
            <img src={logoColoured} alt="logo" width="150px" />

            <GoogleOAuthProvider clientId="1039207877766-8cptjj8eua65kmj3bk660p0k3j1e0fii.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        
                        //    const responsePayload = decodeJwtResponse(response.credential);
                        //     console.log("ID: " + responsePayload.sub);
                        //     console.log('Full Name: ' + responsePayload.name);
                        //     console.log('Given Name: ' + responsePayload.given_name);
                        //     console.log('Family Name: ' + responsePayload.family_name);
                        //     console.log("Image URL: " + responsePayload.picture);
                        //     console.log("Email: " + responsePayload.email);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </Card>
    );
}

export default GoogleAuth;