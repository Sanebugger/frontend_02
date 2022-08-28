
import './App.css';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login';




function App() {
  return (
    <>
    <Router>
     
      <Navbar/>      
      <Switch>
        <Route exact path="/"> <Home/></Route>
        <Route exact path="/Login"> <Login/> </Route>
      </Switch>
    </Router>

  </>
  );
}

export default App;
