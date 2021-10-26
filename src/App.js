import './App.css';
import Topbar from './components/Topbar';
import logo from './resources/logo.png';
import Middlebar from './components/Middlebar';
import Introbar from './components/Introbar';
import Skillbar from './components/Skillbar';
import Myworksbar from './components/Myworksbar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Theme from './components/Theme';

function App() {
  return (
    // <ThemeProvider theme={Theme}>
    <>
      <Topbar />
      <header className="App-header" style={{ fontWeight: 'bold' }}>
        Developer | Lifelong Learner | Reasearcher{' '}
        <p style={{ fontSize: '20px', fontWeight: 'normal' }}>
          {' '}
          Working towards sustainable technology{' '}
        </p>{' '}
        <img src={logo}></img>
      </header>
      <Middlebar />
      <Introbar />
      <Skillbar />
      <Myworksbar />
    </>
    // </ThemeProvider>
  );
}

export default App;
