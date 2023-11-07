import { Component } from '@angular/core';
import { CLUBS, ITEMS } from '../mock-data';
@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.css']
})
export class NestedMenuComponent {
  items = ITEMS;
  clubs = CLUBS;
}


