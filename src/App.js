import React from 'react';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Notfound from './components/NotFound/Notfound';

import Post from './components/Post/Post';



function App() {

  return (
    
  <>
    <Header />
     <Router>
    
   <Switch>
        <Route path='/home'>
            <Home />
        </Route>
         
          <Route path='/PostDetail/:Postid'>
           <Post /> 
            
          </Route>
          <Route exact path='/'>
          <Home />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
      </Switch>
    </Router>
       
</>
  );
}

export default App;
