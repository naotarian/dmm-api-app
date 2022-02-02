import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import MovieIcon from '@mui/icons-material/Movie';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
const WrapperGrid = styled(Grid)`
  padding: 1rem;
`
const Productions = () => {
  const location = useLocation()
  console.log(location.state.item)
  const data = location.state.item
  return (
    <WrapperGrid>
      <Typography>{data.name}</Typography>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Link href={data.listURL.digital} underline="hover" target="_blank">
          <ListItemButton>
            <ListItemIcon>
              <MovieIcon />
            </ListItemIcon>
            <ListItemText primary="動画" />
          </ListItemButton>
        </Link>
        <Link href={data.listURL.monthly_premium} underline="hover" target="_blank">
          <ListItemButton>
            <ListItemIcon>
              <AllInclusiveIcon />
            </ListItemIcon>
            <ListItemText primary="月額動画 見放題chデラックス" />
          </ListItemButton>
        </Link>
        <Link href={data.listURL.mono} underline="hover" target="_blank">
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartCheckoutIcon />
            </ListItemIcon>
            <ListItemText primary="DVD通販" />
          </ListItemButton>
        </Link>
        <Link href={data.listURL.rental} underline="hover" target="_blank">
          <ListItemButton>
            <ListItemIcon>
              <SupervisedUserCircleIcon />
            </ListItemIcon>
            <ListItemText primary="DVDレンタル" />
          </ListItemButton>
        </Link>
      </List>
    </WrapperGrid>
  )
}
export default Productions