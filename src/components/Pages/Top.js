import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import axios from 'axios';
const Top = () => {
    const [item, setItem] = useState([])
    useEffect(()=>{
        const dmmApiKey = process.env.REACT_APP_DMM_API_KEY
        const dmmAffKey = process.env.REACT_APP_DMM_AFF_ID
        axios.get(`https://api.dmm.com/affiliate/v3/ItemList?api_id=${dmmApiKey}&affiliate_id=${dmmAffKey}&site=FANZA&service=digital&floor=videoa&hits=20&sort=date&keyword=%e4%b8%8a%e5%8e%9f%e4%ba%9c%e8%a1%a3&output=json`).then(res => {
            const persons = res.data;
        })
        axios.get(`https://api.dmm.com/affiliate/v3/ActressSearch?api_id=${dmmApiKey}&affiliate_id=${dmmAffKey}&initial=あお&hits=100&output=json`).then(res => {
            const persons = res.data.result.actress;
            setItem(persons)
        })
    }, [])
    const StyledItem = styled(Item)`
        width: 200px;
        height: 200px;
        cursor: pointer;
        @media screen and (max-width:450px) { 
            width: 150px;
            height: 150px;
        }
    `
    function Item(props) {
      const { sx, ...other } = props;
      return (
        <Box
          sx={{
            p: 1,
            m: 1,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
            border: '1px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
            ...sx,
          }}
          {...other}
        />
      );
    }
    const itemData = item.map((item, index) => {
        return (
            <StyledItem key={index}>No.{item.id}<br />{item.name}</StyledItem>
        );
    });
    return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        {itemData}
      </Box>
    );
}; export default Top;