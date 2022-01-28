import logo from './logo.svg';
import './App.css';
import Top from './components/Pages/Top';
import Header from './components/Parts/Header';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

const WrapperGrid = styled(Grid)`
  margin-top: 4rem;
  @media screen and (max-width:450px) { 
  }
`
function App() {
  return (
    <Grid>
      <Header />
      <WrapperGrid>
        <Top />
      </WrapperGrid>
    </Grid>
  );
}

export default App;
