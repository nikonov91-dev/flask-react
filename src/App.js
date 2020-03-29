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
            <Home speech={useResponse}/>
          </Route>

          <Route path="/login">
            <LoginPage authresult={useResponse}/>
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

const Home = ({speech}) =>
  <div>
    <p className="App-link">
      Learn React and Flask
    </p>
    <p>Here is what Flask says: {speech}</p>
  </div>
;

const LoginPage = ({authresult}) =>
  <div>
    <p>login page</p>
    what flask returned: <strong>{authresult}</strong>
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

