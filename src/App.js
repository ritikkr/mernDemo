import './App.css';
import {Route} from 'react-router-dom'
import NavBar  from './component/NavBar';
import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';
import Contact from './component/Contact';
import About from './component/About';
import ErrorPage from './component/ErrorPage';
import Logout from './component/Logout';
import { useState } from 'react';
function App() {
   const [isLoggediN, setIsLoggediN] = useState(false)
  return (
    <>
    <NavBar isLoggediN={isLoggediN}  setIsLoggediN={setIsLoggediN}/>
    <Route exact path="/">
       <Home />
    </Route>
    <Route path="/about">
       <About isLoggediN={isLoggediN} />
    </Route>
    <Route path="/contact">
       <Contact />
    </Route>
    <Route path="/login">
       <Login  setIsLoggediN={setIsLoggediN} />
    </Route>
    <Route path="/signup">
       <Signup />
    </Route>
    <Route path="/logout" >
       <Logout setIsLoggediN={setIsLoggediN} isLoggediN={isLoggediN} />
    </Route>
    {/* <Route>
       <ErrorPage />
    </Route> */}
    </> 
  );
}

export default App;
