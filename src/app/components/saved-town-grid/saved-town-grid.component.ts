import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TownObject } from 'src/app/Utils/types';

@Component({
  selector: 'app-saved-town-grid',
  templateUrl: './saved-town-grid.component.html',
  styleUrls: ['./saved-town-grid.component.css'],
})
export class SavedTownGridComponent {
  @Input() townList: any;
}
