import { Component, Input } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {

  @Input()  arrayKitten: Kitten[] | undefined;

  name = "";
  race = "";
  birthday = new Date();
  picture = "";
  
  onSubmit(): void {}

  create(){
    
    this.arrayKitten?.push(new Kitten(this.name, this.birthday, this.race, this.picture)) 
    ;
  }
}
