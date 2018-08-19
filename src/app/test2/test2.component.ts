import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

	public list = [{"id":1,"name":'Mike'},
					{"id":2,"name":'Dave'},
					{"id":3,"name":'Fred'}];

	public list1 = [];
	public list2 = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
  	this.list1 = this._userService.getUsers(); //Sevrices

  	this._userService.getHttpUsers().subscribe(data => this.list2 = data); //HtppService
  }

}
