import React from "react";
import { InlineWidget } from "react-calendly";
import { Sidebar } from "../Sidebar";

const Eap = () => {
    return (
        <div>
            <Sidebar />
            <InlineWidget url="https://calendly.com/chopradrakshi/session" />
        </div>
    );
};

export default Eap;