export default class ApiService {
  constructor() {
    this.api = '/api';
    this.getAuthenticationStatus = this.api +  '/isAuthenticated';
    this.userLogin = this.api + '/user'
  }

  checkAuthentication() {
    return fetch(this.getAuthenticationStatus,{method: 'GET', mode: 'cors', cache: 'no-cache'})
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
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data)
    })
  }
}