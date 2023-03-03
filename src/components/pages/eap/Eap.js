import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

import CustomLoader from "../../common/CustomLoader";

const Eap = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setIsLoading(false);
        } , 1100); 
    }, []);

    return (
        <>
            {isLoading && <CustomLoader />}

            <div style={{ marginTop: "-6% ", height: "94vh" }}>
                <InlineWidget className="calendly-block-1" url="https://calendly.com/chopradrakshi/session?hide_landing_page_details=1&hide_gdpr_banner=1" styles={{ height: "94vh", width: "100%" }}></InlineWidget>
            </div>
        </>
    );
};

export default Eap;