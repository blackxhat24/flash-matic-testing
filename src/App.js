import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import Home from './pages';



function getLibrary(provider){
  return new Web3(provider)
}
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div>
      <Router>
        <Home />
      </Router>
    </div>
    </Web3ReactProvider>
  );
}

export default App;
