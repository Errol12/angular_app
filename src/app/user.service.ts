import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IUser } from './user';
//import { observable } from 'rxjs/observable';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url:  string = "/assets/data/users.json";

  constructor(private http: HttpClient) { }

  getUsers(){
  	return [
  			{"id":1,"name":'Mike'},
			{"id":2,"name":'Dave'},
			{"id":3,"name":'Fred'},
			{"id":4,"name":'Nick'}
		];
  }

  getHttpUsers(): Observable<IUser[]>{
  	return this.http.get< IUser[]>(this._url);
  }
}
