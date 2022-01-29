import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InitialSearch from './components/Pages/InitialSearch';
import Main from './components/Pages/Main';
import Header from './components/Parts/Header';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

const WrapperGrid = styled(Grid)`
  margin-top: 5.6rem;
  @media screen and (max-width:450px) { 
  }
`
function App() {
  return (
    <Grid>
      <Header />
      <WrapperGrid>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/initial_search" element={<InitialSearch />} />
          </Routes>
        </BrowserRouter>
      </WrapperGrid>
    </Grid>
  );
}

export default App;
