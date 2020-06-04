import React from "react";

export default class MainPage extends React.Component {

  state = {posts: []}

  componentDidMount() {
    this.props.submissionService.getPosts()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {this.props.posts && this.props.posts.map(p => <PostPreview key={p.id} {...p}/>)}

            <div className="clearfix">
              <a className="btn btn-primary float-right" href='#'>Older Posts &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const PostPreview = ({author, title, summary, date, id}) =>
  <React.Fragment>
    <div className="post-preview">
      <a href={'/post/' + id}>
        <h2 className="post-title">{title}</h2>
        <h3 className="post-subtitle">{summary}</h3>
      </a>
      <p className="post-meta">Posted by {author} on {date}</p>
    </div>
    <hr/>
  </React.Fragment>
