import React from "react";
import userPic from '../../assets/img/users/me.png';
import pic1 from '../../assets/img/users/1.jpg';
import pic2 from '../../assets/img/users/2.jpg';
import pic3 from '../../assets/img/users/3.jpg';
import pic4 from '../../assets/img/users/4.jpg';

export default class UserProfile extends React.Component {
  render() {
    return (
      <div className="user-profile">
        <div className="row py-5 px-4">
          <div className="col-xl-4 col-md-6 col-sm-10 mt-4 mx-auto">

            <div className="bg-white shadow rounded overflow-hidden">
              <div className="p-4 bg-dark">
                <div className="media align-items-end profile-header">
                  <div className="profile mr-3">
                    <img
                      src={userPic} alt="..."
                      width="130"
                      className="rounded mb-2 img-thumbnail"/>
                    <a href="#" className="btn btn-dark btn-sm btn-block">Edit profile</a>
                  </div>
                  <div className="media-body mb-5 text-white">
                    <h4 className="mt-0 mb-0">Nikonov Alex</h4>
                    <p className="small mb-4"><i className="fa fa-map-marker mr-2"></i>Khariv, Lyon</p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"> <i
                    className="fa fa-picture-o mr-1"></i>Photos</small>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"> <i
                    className="fa fa-user-circle-o mr-1"></i>Followers</small>
                  </li>
                </ul>
              </div>

              <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="mb-0">Recent photos</h5><a href="#" className="btn btn-link text-muted">Show all</a>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-2 pr-lg-1">
                    <img
                      src={pic1}
                      alt="" className="img-fluid rounded shadow-sm"/>
                  </div>
                  <div className="col-lg-6 mb-2 pl-lg-1"><img
                    src={pic2}
                    alt="" className="img-fluid rounded shadow-sm"/>
                  </div>
                  <div className="col-lg-6 pr-lg-1 mb-2"><img
                    src={pic3}
                    alt="" className="img-fluid rounded shadow-sm"/>
                  </div>
                  <div className="col-lg-6 pl-lg-1"><img
                    src={pic4}
                    alt="" className="img-fluid rounded shadow-sm"/>
                  </div>
                </div>
                <div className="py-4">
                  <h5 className="mb-3">Recent posts</h5>
                  <div className="p-4 bg-light rounded shadow-sm">
                    <p className="font-italic mb-0"><strong>Les Hells Angels débarquent à Paris</strong><br/>
REPORTAGE - Des centaines de motards venus du monde entier fêtent Sonny Barger à l'origine de leur mouvement.</p>
                    <ul className="list-inline small text-muted mt-3 mb-0">
                      <li className="list-inline-item"><i className="fa fa-comment-o mr-2"></i>12 Comments</li>
                      <li className="list-inline-item"><i className="fa fa-heart-o mr-2"></i>200 Likes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}