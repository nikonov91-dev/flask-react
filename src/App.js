import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {useLocation} from "react-router";
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [useResponse, setResponse] = useState('');
  const location = useLocation();


  useEffect(() => {
    fetch('/' + getPath(),
      {method: 'GET', mode: 'cors', cache: 'no-cache'})
      .then(res => res.json())
      .then(res => setResponse(res.payload))
}, [location.pathname]);

  return (
    <div className="App">
      <Switch>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>

          <Menu/>

          <Route exact={true} path="/">
            <Home message={useResponse}/>
          </Route>

          <Route path="/login">
            <LoginPage response={useResponse}/>
          </Route>
        </header>
      </Switch>
    </div>
  );
}

function Menu() {
  return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
  </nav>;
}

const Home = ({message}) =>
  <div>
    <p className="App-link">
      Learn React and Flask
    </p>
    <p>Here is what Flask says: {message}</p>
  </div>
;

const LoginPage = ({response: {hello, users}}) =>
  <div>
    <p>login page</p>
    what flask returned: <strong>{authresult}</strong>
    <ul>
      {users.map(user => <li>{user}</li>)}
    </ul>
  </div>;

function getPath() {
  let pathMatch = window.location.pathname.match(/\/\w+/g);
  let location = pathMatch ? pathMatch[0].replace('/', '') : '';

  switch (location) {
    case 'login':
      break;

    default:
      location = 'helloWorld';
  }
  return location
}

