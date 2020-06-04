export default class ApiService {
  constructor(changeState) {
    this.api = '/api';
    this.posts = this.api + '/posts';
    this.userLogin = this.api + '/login';
    this.image = this.api + '/image/';
    this.changeState = changeState
  }

  checkAuthentication = () =>
    fetch(this.userLogin,{method: 'GET', mode: 'cors', cache: 'no-cache'})
      .then(res => {
        const auth = (res.status !== 401);
        this.changeState({auth});
      });

  getPosts = () => {
    fetch(this.posts)
      .then(res => res.json())
      .then(res => this.changeState({posts: res.payload}))
  }

  getPost = () => {
    const id = window.location.pathname.match(/\d+/)[0];
    fetch(`${this.posts}/${id}`)
      .then(res => res.json())
      .then(res => {
        this.changeState({post: res.payload});
      })
  };

  postUserData(data) {
    return fetch(this.userLogin, {
      credentials: "include",
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }
}