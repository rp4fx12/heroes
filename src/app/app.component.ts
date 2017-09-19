import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
	stamina: number;
}

@Component({
  selector: 'my-app',
  template:  `
  			<h1>{{title}}</h1>
  			<h2>{{hero.name}} has {{hero.stamina}} points!</h2>
  			<div><label>id: </label>{{hero.id}}</div>
  			<div>
  				<label>name: </label>
  				<input [(ngModel)]="hero.name" placeholder="name">
  			</div>
  			<div>
  				<label>stamina: </label>
  				<input [(ngModel)]="hero.stamina" placeholder="stamina">
  			</div>
  			`
})
export class AppComponent {
	title = 'Tour of Heroes';
	hero = Hero = {
		id: 1,
		name: 'John Doe',
		stamina: 100
	}
}


