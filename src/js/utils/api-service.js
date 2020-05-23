export default class ApiService {
  constructor() {
    this.api = '/api';
    this.userLogin = this.api + '/login'
  }

  checkAuthentication() {
    return fetch(this.userLogin,{method: 'GET', mode: 'cors', cache: 'no-cache'})
  }

  getPath() {
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