import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navbar from "./elements/navbar";
import Header from "./elements/header";
import MainPage from "./pages/main-page";
import Footer from "./elements/footer";
import Article from "./pages/article";
import About from "./pages/about";
import LoginPage from "./pages/login-page";
import ApiService from "./utils/api-service";
import UserProfile from "./pages/user-profile";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.submissionService = new ApiService();
    this.state = {
      res: '',
      auth: false
    }
  }

  componentDidMount() {
    this.submissionService.checkAuthentication()
      .then(res => {
        const auth = (res.status !== 401);
        this.setState({auth});
      })
  }


  render() {
    return (
      <div className="App">

        <Navbar isAuthenticated={this.state.auth}/>
        <Switch>

          <Route exact={true} path="/">
            <Header/>
            <MainPage/>
          </Route>

          <Route path="/post">
            <Header/>
            <Article/>
          </Route>

          <Route path='/about'>
            <Header/>
            <About/>
          </Route>

          <Route path="/login">
            <LoginPage submitForm={this.submissionService}/>
          </Route>

          <Route path="/user">
            <UserProfile submitForm={this.submissionService}/>
          </Route>

          <Route path="/*">
            <Header/>
            <NoMatch/>
          </Route>

        </Switch>

        <hr/>

        <Footer/>
      </div>
    );
  }
}

const NoMatch = () => <div>404 or 401</div>

