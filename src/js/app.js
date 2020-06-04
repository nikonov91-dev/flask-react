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
    this.submissionService = new ApiService(this.changeState);
    this.state = {
      res: '',
      auth: false
    }
  }

  componentDidMount() {
    this.submissionService.checkAuthentication()
  }

  changeState = (state) => this.setState(state);

  render() {
    return (
      <div className="App">

        <Navbar isAuthenticated={this.state.auth}/>
        <Switch>

          <Route exact={true} path="/">
            <Header/>
            <MainPage submissionService={this.submissionService} posts={this.state.posts}/>
          </Route>

          <Route path="/post/">
            <Article submissionService={this.submissionService} post={this.state.post}/>
          </Route>

          <Route path="/login">
            <LoginPage submitForm={this.submissionService}/>
          </Route>

          <Route path="/user">
            <UserProfile submitForm={this.submissionService}/>
          </Route>

          <Route path='/about'>
            <Header/>
            <About/>
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

