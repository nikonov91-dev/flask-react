import React from "react";

export default class Footer extends React.Component{
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="https://github.com/nikonov91-dev" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">Copyright &copy; Student project 2020</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}