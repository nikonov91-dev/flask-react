import React from "react";
import pic1 from '../../assets/img/space-photo.jpg';
import pic2 from '../../assets/img/travel-photo.jpg';

export default class Article extends React.Component {
  state = {image: ''}

  componentDidMount() {
    this.props.submissionService.getPost();
  }

  render() {
    const {post} = this.props;
    return (
      <article>
        <div className="container">
          <div className="row">
            {this.props.post
              ? <div className="col-lg-8 col-md-10 mx-auto">
                <h2 className="section-heading">{post.title}</h2>

                <img className="img-fluid" src={post.image === 'space-photo.jpg' ? pic1 : pic2} alt=""/>

                <p>{post.body}</p>

                <p>Written by <strong>{post.author}</strong></p>
              </div>
              : <div className="col-lg-8 col-md-10 mx-auto">Post not found. 404</div>
            }
          </div>
        </div>
      </article>
    )
  }
}