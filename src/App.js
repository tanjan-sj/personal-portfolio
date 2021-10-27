import './App.css';
import Topbar from './components/Topbar';
import Middlebar from './components/Middlebar';
import Introbar from './components/Introbar';
import Skillbar from './components/Skillbar';
import Myworksbar from './components/Myworksbar';
import { ThemeProvider } from '@mui/material';
import Theme from './components/Theme';
import Resumebar from './components/Resumebar';
import Contactme from './components/Contactme';
import Header from './components/utils/Header';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <Topbar />
        <Header />
        <Middlebar />
        <Introbar />
        <Skillbar />
        <Myworksbar />
        <Resumebar />
        <Contactme />
      </>
    </ThemeProvider>
  );
}

export default App;
