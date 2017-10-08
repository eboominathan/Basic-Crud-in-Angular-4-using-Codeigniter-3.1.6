import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {User} from "./user";
import {Headers, Http} from '@angular/http';

@Injectable()
export class UserService {

  private host = window.location.hostname;
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersURL = `http://${this.host}/api/v1/users`;
   
  constructor(private http: Http) {    

  };

  /**
   * Return all users
   * @returns {Promise<User[]>}
   */
  getUsers(): Promise<User[]> {
    return this.http.get(this.usersURL)
      .toPromise()
      .then(response => {
        return response.json() as User[];
      })
      .catch(this.handleError);
  }

  /**
   * Returns user based on id
   * @param id:string
   * @returns {Promise<User>}
   */
  getUser(id: string): Promise<User> {
    const url = `${this.usersURL}/?id=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  /**
   * Adds new user
   * @param user:User
   * @returns {Promise<User>}
   */
  add(user: User): Promise<User>{
    return this.http.post(this.usersURL, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError)
  }

  /**
   * Updates user that matches to id
   * @param user:User
   * @returns {Promise<User>}
   */
  update(user: User): Promise<User>{
    return this.http.post(this.usersURL, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError)
  }

  /**
   * Removes user
   * @param id:string
   * @returns {Promise<User>}
   */
  remove(id: string): Promise<any>{
    var data = JSON.stringify({_id: id,delete:1});
    return this.http.post(this.usersURL, data, {headers: this.headers})
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError)
  }

  /**
   * Handles error thrown during HTTP call
   * @param error:any
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
