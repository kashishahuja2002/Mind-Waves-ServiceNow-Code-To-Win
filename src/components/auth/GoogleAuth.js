import React from "react";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

import { Button } from "@mui/material";
import GoogleIcon from '../../assets/images/GoogleIcon.png';

const GoogleAuth = () => {

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            localStorage.setItem("token", tokenResponse.access_token);
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
            );

            console.log(userInfo);
        },
        onError: errorResponse => console.log(errorResponse),
    });

    return (    
        <Button className="authButton" onClick={googleLogin}>
            Sign in with Google &nbsp;
            <img src={GoogleIcon} alt="google logo" width="20px" />
        </Button>
    );
}

export default GoogleAuth;