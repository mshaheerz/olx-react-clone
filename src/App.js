import React, { useContext, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import './App.css';
import Post from './store/PostContext'

import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase}= useContext(FirebaseContext)

  useEffect(() => {
      firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
      })
  }, [])
  
  return (
    <Router>
    <div>
<Post>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/login'>
       <Login />
      </Route>
      <Route path='/create'>
      <Create />
      </Route>
      <Route path='/postView'>
      <ViewPost />
      </Route>
    </Post>
    </div>
    
    </Router>
  );
}

export default App;
