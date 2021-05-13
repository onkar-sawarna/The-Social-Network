import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import { Home } from './components/screens/Home';
import { Signin } from './components/screens/Login';
import { Signup } from './components/screens/Signup';
import { Profile } from './components/screens/Profile';
import { Createpost } from './components/screens/Createpost';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/signin'>
       <Signin/>
      </Route>
      <Route path='/signup'>
       <Signup/>
      </Route>
      <Route path='/profile'>
       <Profile/>
      </Route>
      <Route path='/create'>
       <Createpost/>
      </Route>
    </BrowserRouter>

  );
}

export default App;
