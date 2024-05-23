import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled(Container)(({ theme, maxwidth, backgroundcolor }) => ({
    [theme.breakpoints.up('lg')]: {
        maxWidth: maxwidth || '1300px', // Use maxwidth prop or fallback to '1300px'
    },
    backgroundColor: backgroundcolor || 'transparent', // Use backgroundcolor prop or fallback to 'transparent'
}));

const CustomContainer = (props) => {
    const { children, maxwidth, backgroundcolor } = props;
    return <ContainerWrapper maxwidth={maxwidth} backgroundcolor={backgroundcolor}>{children}</ContainerWrapper>;
};

export default CustomContainer;
