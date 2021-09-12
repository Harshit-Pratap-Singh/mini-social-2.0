import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Createpost from './components/Createpost';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import UserHome from './components/UserHome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/createpost'>
            <Createpost/>
          </Route>
          <Route path='/userhome'>
            <Header/>
            <UserHome/>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
