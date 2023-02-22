import React from "react";
import { InlineWidget } from "react-calendly";
import '../../../styles/pages/Eap/Eap.scss'


const Eap = () => {

    return (
        <div style={{ marginTop: "-6% " }}>
            <InlineWidget className="calendly-block-1" url="https://calendly.com/chopradrakshi/session?hide_landing_page_details=1&hide_gdpr_banner=1" styles={{ minWidth: "520px", height: "1000px", width: "102%" }}></InlineWidget>
        </div>
    )
};

export default Eap;