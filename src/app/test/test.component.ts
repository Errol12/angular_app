import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p> Hello world {{name}} 
  				{{2+1}}  
  				{{"hello" + name}}
  				{{name.length}}
  				{{name.toUpperCase()}}
  				{{greetUser()}}
  				{{siteUrl}}
  			</p>
  			<br>
  			<input [id]="myId" type="text" [class]="success" value="george" name="inp"/> 
  			<input id="{{myId}}" type="text" class="text-special" value="george" name="inp"/>
  			<br>
  			<h2 [ngClass]="messageClasses">CodeEvolution</h2>
  			<button (click)="onClick()">Greet</button>
  			<button (click)="onClick1($event)">Event Greet</button>
  			<button (click)="name='Robert'">Event Greet</button>
  			<br>
  			<input type="text" #myInput/>
  			<button (click)="onClick3(myInput)">Greet 3</button>

  			<br>
  			<input type="text" [(ngModel)]="name1"/>
  			{{name1}}
  			`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Mark";
  public name1= "sd";
  public myId="test_id";
  public success = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
  	"text-success": !this.hasError,
  	"text-failure": this.hasError,
  	"text-special":this.isSpecial
  }
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
  	return "hello" + this.name;
  }

  onClick(){
  	console.log('triggered');
  	this.name = "Errol";
  }

  onClick1(event){
  	console.log(event);
  	this.name = "Errol";
  }


  onClick3(input){
  	console.log(input.value);
  	this.name = "Errol";
  }

}
