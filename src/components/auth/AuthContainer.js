import React from "react";

import GoogleAuth from "./GoogleAuth";

import '../../styles/auth.scss';

const AuthContainer = () => {
    return (
        <>
            <div className="googleAuthContainer"><GoogleAuth /></div>
            <section className="section-bubble-top"></section>
            <section className="section-bubble-bottom"></section>
        </>
    );
}

export default AuthContainer;