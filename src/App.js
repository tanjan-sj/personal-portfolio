import './App.css';
import Topbar from './components/Topbar';
import Middlebar from './components/Middlebar';
import Introbar from './components/Introbar';
import Skillbar from './components/Skillbar';
import Myworksbar from './components/Myworksbar';
import { ThemeProvider } from '@mui/material';
import CustomTheme from './theme/CustomTheme';
import Resumebar from './components/Resumebar';
import Contactme from './components/Contactme';
import Header from './components/utils/Header';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      {/* <div color="primary"> */}
      <Topbar />
      <Header />
      <Middlebar />
      <Introbar />
      <Skillbar />
      <Myworksbar />
      <Resumebar />
      <Contactme />
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
