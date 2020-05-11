import React from 'react';

export default class LoginPage extends React.Component{
  state = {
    email: '',
    password: ''
  }

  onSubmission = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.submitForm.postUserData({email, password})
      .then(res => {

        alert(res.status);
      })
  }

  render() {
    return (<div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body login-page">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin" onSubmit={this.onSubmission}>
              <div className="form-label-group py-3">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus
                       onChange={(e => this.setState({email: e.target.value}))}/>
              </div>

              <div className="form-label-group py-3">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"
                onChange={(e => this.setState({password: e.target.value}))}/>
                  <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              {/*<hr className="my-4"/>*/}
              {/*<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i*/}
              {/*  className="fab fa-google mr-2"></i> Sign in with Google*/}
              {/*</button>*/}
            </form>
          </div>
        </div>
      </div>
    </div>
  )}
  }