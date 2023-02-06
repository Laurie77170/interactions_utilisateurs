import { Component } from '@angular/core';
import { Kitten } from './kitten';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inter';
  myForm: FormGroup | undefined;
  
  kittens: Kitten [] = [
   {name: 'Princess',
    birthday: new Date(),
    race: 'sphinx',
    picture: 'assets/chats_sphinx.jpg'},
    {name: 'Flocon',
    birthday: new Date(),
    race:'Main Coon',
    picture: 'assets/main_coon.jpg'},
    {name: 'Minouche',
    birthday: new Date(),
    race: 'Persan',
    picture: 'assets/persan.jpg'},
 ];

  userKittens: Kitten [] = [];

}

