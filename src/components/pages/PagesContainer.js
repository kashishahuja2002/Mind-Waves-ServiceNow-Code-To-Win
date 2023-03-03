import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';

import { Sidebar, SidebarContents } from "./Sidebar";
import Navbar from "./Navbar";
import Questionnaire from '../questionnaire/Questionnaire';

import '../../styles/pages/PagesContainer.scss';

const PagesContainer = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const session = sessionStorage.getItem('isMySessionActive');
        if(!session) {
            navigate('/auth/login');
        }
    }, []);

    const [showSidebar, setShowSidebar] = useState(false);

    // Questionairre pop-up
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const now = new Date();
        const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0); // 6pm
        const timeUntilTarget = targetTime - now;
        if (timeUntilTarget > 0) {
            const timeoutId = setTimeout(() => {
            const lastShown = localStorage.getItem('popupLastShown');
            const today = new Date().toDateString();
            if (lastShown !== today) {
                setShowPopup(true);
                localStorage.setItem('popupLastShown', today);
            }
            }, timeUntilTarget);
            return () => clearTimeout(timeoutId);
        }
        const lastShown = localStorage.getItem('popupLastShown');
        const today = new Date().toDateString();
        if (lastShown !== today) {
            setShowPopup(true);
            localStorage.setItem('popupLastShown', today);
        }
    }, []);

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="pagesContainer"
        >
            <Sidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />

            <Grid item className="sidebar" sx={{ display: { xs: 'none', lg: 'block' }, backgroundColor: "var(--dark-blue)" }} xs={2}>
                <SidebarContents />
            </Grid>

            <Grid item xs>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item sx={{ width: "100%" }}>
                        <Navbar toggleSidebar={setShowSidebar} />
                    </Grid>

                    <Grid item className="outlet-box">
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>

            {showPopup && <Questionnaire />}
        </Grid>
    );
}

export default PagesContainer;