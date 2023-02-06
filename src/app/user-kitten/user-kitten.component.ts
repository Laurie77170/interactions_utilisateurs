import { Component, Input } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent {

  @Input() arrayUser: Kitten[] | undefined;

}
