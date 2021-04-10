import React from 'react';
import errorPage from './404page.jpeg'
import {
    Box,
    Image
  } from "grommet";

const bgr = errorPage;
const notFound = () => {
    return (
        <Box fill>
            <Image src={bgr} alt="Logo" />
        </Box>
    )
}

export default notFound;
