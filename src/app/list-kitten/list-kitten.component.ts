import { Component, Input } from '@angular/core';
import { filter } from 'rxjs';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {

  @Input() arrayKitten: Kitten [] | undefined;
  @Input() arrayUser: Kitten[] | undefined;

  adopt(kitten:Kitten, index:number) {
    this.arrayUser?.push(kitten);
    this.arrayKitten?.splice(index,1);
    // si le chat du tableau son nom est différent, il va revenir de
    }
  }


