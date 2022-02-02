import React,{ useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import InitialArray from '../../config/export';
import { useNavigate } from 'react-router-dom'

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
    height: 58px;
`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
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
        width: 475px;
        text-align: center;
    }
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

const SearchArea = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const selectedInitial = useState('');
    const allInitials = InitialArray.Initial;
    const navigate = useNavigate()
    const searchInitialName = (requestInitial) => {
        try {
            navigate('/initial_search', { state: { requestInitial: requestInitial } })
        } catch (error) {
          console.error('error:', error)
        }
    }
    const ListInitial = allInitials.map((putInitial, index) => {
        return (
            <ListInitialButton variant="contained" size="small" key={index} onClick={() => searchInitialName(putInitial)}>
              {putInitial}
            </ListInitialButton>
        )
    })
    return (
        <Grid>
            <StyledStack direction="row" spacing={2}>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Box>
               <StyledButton variant="contained" color="success">
                    Success
               </StyledButton>
            </StyledStack>
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
        </Grid>
    )
}
export default SearchArea;