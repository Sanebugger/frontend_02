// import Home from "./components/Home";

import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Home from "./components/HOMEPAGE/Home";

function App() {
  return (
    <>
    <Router>
       <Header/>
       <Switch>
        {/* <Route exact path='/' ><Home/></Route> */}
        <Route exact path='/' ><Home/></Route>
        <Route exaect path='/products' > <Product/> </Route>
        <Route exaect path='/contactus' > <Contact/></Route>
        <Route exaect path='/aboutus' >  <About/></Route>
      </Switch>
      
    </Router>
  </>
  );
}

export default App;
