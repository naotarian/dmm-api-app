import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NoImage from '../../images/noimage.png';
import NameHead from '../../config/export.js';
import { useLocation, useNavigate } from 'react-router-dom'
const Top = (state) => {
  const location = useLocation()
  const [item, setItem] = useState([])
  const selectedInitial = location.state.requestInitial ? location.state.requestInitial : 'あ'
  useEffect(()=>{
    const dmmApiKey = process.env.REACT_APP_DMM_API_KEY
    const dmmAffKey = process.env.REACT_APP_DMM_AFF_ID
    axios.get(`https://api.dmm.com/affiliate/v3/ActressSearch?api_id=${dmmApiKey}&affiliate_id=${dmmAffKey}&initial=${selectedInitial}&hits=100&output=json`).then(res => {
      const persons = res.data.result.actress;
      setItem(persons)
    })
  }, [])
  const StyledCard = styled(Card)`
    width: 200px;
    margin: 1rem;
    cursor: pointer;
    @media screen and (max-width:450px) { 
        width: 150px;
        height: 300px;
    }
  `
  const StyledBox = styled(Box)`
    padding: 2rem;
    margin: 2rem;
    background-color: 'grey';
    color: 'grey';
    border: '1px solid';
    border-color: 'grey';
    border-radius: 2rem;
    font-size: '0.875rem';
    font-weight: '700';
  `
  const NameTypo = styled(Typography)`
    font-size: 1rem;
  `
  const StyledCardActions = styled(CardActions)`
    justify-content: space-evenly;
  `
  function Item(props) {
    const { sx, ...other } = props;
    return (
      <StyledBox />
    );
  }
  const itemData = item.map((item, index) => {
    let image = ('imageURL' in item) ? item.imageURL.large : NoImage
      return (
        <StyledCard sx={{ maxWidth: 345 }} key={index}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <NameTypo gutterBottom variant="h5" component="div">
              No.{item.id}<br />{item.name}
            </NameTypo>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='outlined' size="small">作品</Button>
            <Button size="small" color='success' variant='outlined'>詳細</Button>
          </CardActions>
        </StyledCard>
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
}; 
export default Top;