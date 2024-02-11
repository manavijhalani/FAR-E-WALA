import logo from './logo.svg';
import './App.css';
import SignUp from './signup';
import Seller from './signup1';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
          <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
     <Routes>
          <Route path="/signup1" element={<Seller />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
   </Router>
   </div>
 
  );
}

export default App;
