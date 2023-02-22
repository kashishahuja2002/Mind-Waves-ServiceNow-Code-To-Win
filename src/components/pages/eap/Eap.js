import React from "react";
import { InlineWidget } from "react-calendly";


const Eap = () => {

    return (
        <div>
            <div style={{ marginTop: "-6% ", height: "94vh" }}>
                <InlineWidget className="calendly-block-1" url="https://calendly.com/chopradrakshi/session?hide_landing_page_details=1&hide_gdpr_banner=1" styles={{ height: "94vh", width: "100%" }}></InlineWidget>
            </div>
            {/*<div style={{ marginTop: "-6% " }}>
                <InlineWidget className="calendly-block-1" url="https://calendly.com/chopradrakshi/session?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=242f53" styles={{ minWidth: "520px", height: "1000px", width: "102%" }}></InlineWidget>
            </div>*/}
        </div>
    )
};

export default Eap;