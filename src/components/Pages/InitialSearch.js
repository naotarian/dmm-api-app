import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import SearchArea from '../Parts/SearchArea';
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
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import InitialArray from '../../config/export';
import Modal from '@mui/material/Modal';
const StyledCard = styled(Card)`
    width: 200px;
    margin-top: 1rem;
    cursor: pointer;
    @media screen and (max-width:450px) { 
        width: 170px;
        height: 300px;
    }
  `
  const StyledStack = styled(Stack)`
    width: fit-content;
    margin: 2rem auto;
    @media screen and (max-width:450px) { 
        width: 88%;
        margin: 2rem auto;
        justify-content: space-around;
    }
  `
  const ModalLinkBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)!important;
    width: 80%;
    background-color: #fff;
    border: 2px solid #000;
    box-shadow: 24px;
    padding: 2rem;
    @media screen and (min-width:1024px) { 
        width: 30%;
        text-align: center;
    }
  `
  const StyledBox = styled(Box)`
    background-color: 'grey';
    color: 'grey';
    border: '1px solid';
    border-color: 'grey';
    border-radius: 2rem;
    font-size: '0.875rem';
    font-weight: '700';
  `
  const ListInitialButton = styled(Button)`
    min-width: 30px!important;
    margin-right: 2rem;
    margin-bottom: 2rem;
    @media screen and (min-width:1024px) { 
        min-width: 55px!important;
        height: 55px;
    }
  `
  const NameTypo = styled(Typography)`
    font-size: 1rem;
  `
  const StyledCardActions = styled(CardActions)`
    justify-content: space-evenly;
  `
  const StyledPagination = styled(Pagination)`
    width: fit-content;
    margin: 0 auto;
  `
  const ItemBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 1rem;
    margin: 0;
    background-color: #fff;
    border-radius: 8px;
    justify-content: space-around;
  `
const Top = (state) => {
  const location = useLocation()
  const [item, setItem] = useState([])
  const [page, setPage] = React.useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const allInitials = InitialArray.Initial;
  const dmmApiKey = process.env.REACT_APP_DMM_API_KEY
  const dmmAffKey = process.env.REACT_APP_DMM_AFF_ID
  const [selectedInitial,SetselectedInitial] = useState(location.state.requestInitial)
  const handleChange = (event, value) => {
    //ページネーション処理
    setPage(value);
    let start_set = (value - 1) * 100 + 1
    axios.get(`https://api.dmm.com/affiliate/v3/ActressSearch?api_id=${dmmApiKey}&affiliate_id=${dmmAffKey}&initial=${selectedInitial}&offset=${start_set}&hits=100&output=json`).then(res => {
      const persons = res.data.result.actress;
      setItem(persons)
    })
  };
  useEffect(()=>{
    axios.get(`https://api.dmm.com/affiliate/v3/ActressSearch?api_id=${dmmApiKey}&affiliate_id=${dmmAffKey}&initial=${selectedInitial}&hits=100&output=json`).then(res => {
      const persons = res.data.result.actress;
      setTotalCount(Math.ceil(res.data.result.total_count / 100))
      console.log(res)
      setItem(persons)
    })
  }, [])
  const changeInitialName = (putInitial) => {
    //頭文字変更処理
    axios.get(`https://api.dmm.com/affiliate/v3/ActressSearch?api_id=${dmmApiKey}&affiliate_id=${dmmAffKey}&initial=${putInitial}&hits=100&output=json`).then(res => {
      const persons = res.data.result.actress;
      setTotalCount(Math.ceil(res.data.result.total_count / 100))
      console.log(res)
      setItem(persons)
      setOpen(false)
    })
    SetselectedInitial(putInitial)
    setPage(1);
  }
  
  const ListInitial = allInitials.map((putInitial, index) => {
    return (
      <ListInitialButton variant="contained" size="small" key={index} onClick={() => changeInitialName(putInitial)}>
        {putInitial}
      </ListInitialButton>
    )
  })
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
    <Grid>
      <StyledStack>
      　<Button variant="contained" onClick={handleOpen}>頭文字検索</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <ModalLinkBox>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                頭文字検索
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {ListInitial}
              </Typography>
            </ModalLinkBox>
        </Modal>
      </StyledStack>
      <StyledPagination count={totalCount} page={page} onChange={handleChange} variant="outlined" color="secondary" />
      <ItemBox>
        {itemData}
      </ItemBox>
    </Grid>
  );
}; 
export default Top;