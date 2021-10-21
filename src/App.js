import './App.css';
import Topbar from './components/Topbar';
import logo from './resources/logo.png';
import Middlebar from './components/Middlebar';
import Introbar from './components/Introbar';
import Skillbar from './components/Skillbar';

function App() {
  return (
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
    </>
  );
}

export default App;
