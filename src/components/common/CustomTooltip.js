import React from "react";

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#000",
    color: 'rgba(255, 255, 255, 1)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const CustomTooltip = (props) => {
    const { title, children } = props;

    return (
        <LightTooltip title={title}>
            {children}
        </LightTooltip>
    );
}

export default CustomTooltip;