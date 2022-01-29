import React,{ useState, useEffect } from 'react';
import SearchArea from '../Parts/SearchArea';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const StyledStack = styled(Stack)`
    width: fit-content;
    margin: 0 auto;
    @media screen and (max-width:450px) { 
        width: 100%;
        margin: 0 auto;
        justify-content: space-around;
    }
`
const StyledButton = styled(Button)`
    @media screen and (max-width:450px) { 
        height: 58px;
        margin-top: 0.5rem!important;
    }
`
const Main = () => {
    return (
        <Grid>
            <SearchArea />
        </Grid>
    );
}
export default Main;