import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="">
       <Nav />
       <Home />
    </div>
    </Router>
    
  );  
}

export default App;
