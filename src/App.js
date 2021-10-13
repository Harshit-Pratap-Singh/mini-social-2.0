import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Createpost from './components/Createpost';
import EditPost from './components/EditPost';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import UserHome from './components/UserHome';
import Register from './components/Register';
import Post_modal from './components/Post_modal';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';




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
          <Route path='/editpost/:id' component={EditPost}/>
          <Route path='/signup'>
          <Register/>
          </Route>
          <Route path='/test' ><Post_modal Modal={true}/></Route>
          <Redirect to='/'/>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
