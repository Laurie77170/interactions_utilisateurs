import { Component } from '@angular/core';
import { Kitten } from './kitten';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inter';
  kittens: Kitten [] = [
   {name: 'Princess',
    birthday: new Date(),
    race: 'sphinx',
    photo: 'https://placekitten.com/200/300'},
    {name: 'Flocon',
    birthday: new Date(),
    race:'Main Coon',
    photo: 'https://placekitten.com/200/310'},
    {name: 'Minouche',
    birthday: new Date(),
    race: 'Persan',
    photo: 'https://placekitten.com/200/320'},
 ];

  userKittens: Kitten [] = [];

}

